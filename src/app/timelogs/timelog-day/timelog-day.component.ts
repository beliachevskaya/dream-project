import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DataService} from '../data.service';
import {HeaderTimelogsComponent} from '../header-timelogs/header-timelogs.component';
import * as moment from 'moment';
import {Moment} from 'moment';
import {auditTime, debounceTime} from 'rxjs/operators';

export interface Timesheet {
  project: string;
  time: number;
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
  projects: Project[];
}

const currentDate = moment().format('L');

const  saveTimeout = 2000;

const minLength = 1;

@Component({
  selector: 'app-timelog-day',
  templateUrl: './timelog-day.component.html',
  styleUrls: ['./timelog-day.component.sass'],
  // changeDetection: ChangeDetectionStrategy.OnPush

})
export class TimelogDayComponent implements OnInit, OnDestroy {

  @ViewChild(HeaderTimelogsComponent, {static: false})
  private header: HeaderTimelogsComponent;

  timesheetForm: FormGroup;
  data: Data = null;
  project: Project = null;
  displayedColumns: string[] = ['project', 'time', 'comment'];
  date: string = moment().format('L');
  time: string = null;
  projects: Project[] = [];
  timesheets: Timesheet[] = [];
  valueChangesSubscription;

  constructor(
    private dataService: DataService,
    private cdr: ChangeDetectorRef
  ) {
    this.timesheetForm = new FormGroup({
      project: new FormControl(null),
      time: new FormControl(''),
      comment: new FormControl('')
    });
    this.valueChangesSubscription  = this.timesheetForm.valueChanges.pipe(debounceTime(saveTimeout))
      .subscribe(formData => {
        // console.log(formData);
        this.saveData();
      });
  }

  test() {
    console.log(this.header.datepicker.date.value.format('L'));
  }

  resetTimesheet(): void {
    this.timesheetForm.reset({
      project: null,
      time: '',
      comment: ''
    });
  }

  deleteTimesheet(index: number): void {
    this.timesheets = this.timesheets.filter((elem, i ) => i !== index);
    this.date = this.header.datepicker.date.value.format('L');
    this.time = moment().format('LT');
    this.dataService.setTimesheetData(this.timesheets, this.date, this.time);
  }

  getTotalCost(): number {
    return this.timesheets
      .map(timesheet => timesheet.time)
      .reduce((acc, hours) => acc + hours, 0);
  }

  saveData(): void {
    const {comment} = this.timesheetForm.value;
    let {time, project} = this.timesheetForm.value;
    project = project === null ? null : project.name;
    time = isNaN(parseFloat(time)) ? 0 : time;
    const validTime = !isNaN(parseFloat(time)) && parseFloat(time) !== 0;
    const validComment = comment.length >= minLength;
    if (validTime || validComment) {
      const newTimesheet = {
        project,
        time: parseFloat(time),
        comment
      };
      this.timesheets.push(newTimesheet);
      this.timesheets = [...this.timesheets];
      this.date = this.header.datepicker.date.value.format('L');
      this.time = moment().format('LT');
      this.dataService.setTimesheetData(this.timesheets, this.date, this.time);
      this.resetTimesheet();
    }
  }

  setData(data, timesheets: Timesheets): void {
    const {date, saveTime, timesheet} = timesheets ? timesheets : {date: currentDate, saveTime: null, timesheet: []};
    this.date = date;
    this.time = saveTime;
    this.timesheets = timesheet;
    this.data = data || null;
    this.projects = data.projects || [];
  }

  ngOnInit(): void {
    this.dataService.getData()
      .subscribe((data: Data) => {
        if (data) {
        const firstElement = 0;
        const currentTimesheet = data.timesheets.filter((timesheet) => {
          if (currentDate === timesheet.date) {
            return timesheet;
          }
        });
        this.setData(data, currentTimesheet[firstElement]);
        }
      });
  }

  ngOnDestroy(): void {
    this.valueChangesSubscription.unsubscribe();
  }
}
