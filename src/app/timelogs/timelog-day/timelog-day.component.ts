import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import {FormArray, FormControl, FormGroup, FormBuilder} from '@angular/forms';
import {DataService} from '../data.service';
import {HeaderTimelogsComponent} from '../header-timelogs/header-timelogs.component';
import * as moment from 'moment';
import {Moment} from 'moment';
import {auditTime, debounce, debounceTime, takeWhile} from 'rxjs/operators';
import {TimesheetGroup} from './timesheet.model';
import {timer} from 'rxjs';

export interface Timesheet {
  project: string;
  time: string;
  comment: string;
}

export interface Project {
  name: string;
  color: string;
}

export interface Timesheets {
  date: string;
  saveTime: string;
  timesheet: Timesheet[];
}

export interface Data {
  timesheets: Timesheets[];
  projects: string[];
}

const  saveTimeout = 300;
const timeout  = 15000;

@Component({
  selector: 'app-timelog-day',
  templateUrl: './timelog-day.component.html',
  styleUrls: ['./timelog-day.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class TimelogDayComponent implements OnInit, OnDestroy {

  @ViewChild(HeaderTimelogsComponent, {static: false})
  private header: HeaderTimelogsComponent;

  timesheetForm: FormGroup;
  timesheetsForm: FormGroup;
  displayedColumns: string[] = ['project', 'time', 'comment'];
  date: string = moment().format('L');
  time: string = null;
  projects: string[] = [];
  valueChangesTimesheet$;
  valueChangesTimesheets$;
  saveStatus = 'Save';
  isDisabled: boolean;

  get timesheetsControls(): FormArray {
    return this.timesheetsForm.get('timesheets') as FormArray;
  }

  constructor(
    private dataService: DataService,
    private cdr: ChangeDetectorRef,
    private formBuilder: FormBuilder
  ) {
  }

  subscribeTimesheetsForm(): void {
    this.valueChangesTimesheets$  = this.timesheetsForm.valueChanges.pipe(
      debounce(() => {
        this.isDisabled = true;
        this.saveStatus = 'Saving...';
        return timer(timeout);
      }))
      .subscribe(() => {
        this.setData();
      });
  }

  subscribeTimesheetForm(): void {
    this.valueChangesTimesheet$  = this.timesheetForm.valueChanges.pipe(
      debounceTime(saveTimeout))
      .subscribe(formData => {
        const { project, time, comment } = formData;
        if (project !== null || time !== '' || comment !== '') {
          this.addTimesheetForm(formData);
          this.resetTimesheet();
        }
      });
  }

  addTimesheetForm(data): void {
    const key = 'timesheets';
    const emptyForm: Timesheet = data;
    const timesheets: FormGroup = TimesheetGroup.asFormGroup(emptyForm);
    this.timesheetsControls.controls.push(
      timesheets
    );
    const newControl = new FormArray ([...this.timesheetsControls.controls]);
    this.timesheetsForm.setControl(key, newControl);
  }

  deleteTimesheetForm(index: number): void {
    const key = 'timesheets';
    this.timesheetsControls.controls = this.timesheetsControls.controls.filter((elem, i ) => i !== index);
    const newControl = new FormArray ([...this.timesheetsControls.controls]);
    this.setData();
  }

  resetTimesheet(): void {
    this.timesheetForm.reset({
      project: null,
      time: '',
      comment: ''
    });
  }

  getTotalCost(): number {
    const time = 'time';
    return (this.timesheetsForm.get('timesheets') as FormArray).controls
      .map(timesheet => {
        const hours = (timesheet as FormGroup).controls[time].value;
        return parseFloat(hours);
      })
      .reduce((acc, hours) => acc + hours, 0);
  }

  setDate() {
    this.date = this.header.datepicker.date.value.format('L');
    this.setDataInForm(this.date);
  }

  setData(): void {
    this.date = this.header.datepicker.date.value.format('L');
    this.time = moment().format('LT');
    if (this.timesheetsForm.valid) {
      const {timesheets} = this.timesheetsForm.value;
      this.saveStatus = `Saved at ${this.time}`;
      this.dataService.setTimesheetData(timesheets, this.date, this.time);
      this.isDisabled = true;
      this.cdr.detectChanges();
    }
  }

  ngOnInit(): void {
    this.timesheetsForm = this.formBuilder.group({
      timesheets: this.formBuilder.array([])
    });
    this.subscribeTimesheetsForm();
    const date = moment().format('L');
    this.setDataInForm(date);
    this.timesheetForm = new FormGroup({
      project: new FormControl(null),
      time: new FormControl(''),
      comment: new FormControl('')
    });
    this.subscribeTimesheetForm();
  }

  setDataInForm(date) {
    this.dataService.getTimesheetFormArray(date).subscribe(timesheets => {
      this.valueChangesTimesheets$.unsubscribe();
      this.timesheetsForm.setControl('timesheets', timesheets);
      this.isDisabled = !this.timesheetsForm.valid;
      this.subscribeTimesheetsForm();
      this.cdr.detectChanges();
    });
    this.dataService.getProjects().subscribe(projects => {
      this.projects = projects;
      this.cdr.detectChanges();
    });
  }

  ngOnDestroy(): void {
    this.valueChangesTimesheet$.unsubscribe();
    this.valueChangesTimesheets$.unsubscribe();
  }
}
