import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import {FormControl, FormGroup} from '@angular/forms';
import {DataService} from '../data.service';

export interface Timesheet {
  project: string;
  time: number;
  comment: string;
}

export interface Project {
  name: string;
  color: string;
}

export interface Data {
  timesheets: Timesheet[];
  projects: Project[];
}

@Component({
  selector: 'app-timelog-day',
  templateUrl: './timelog-day.component.html',
  styleUrls: ['./timelog-day.component.sass']

})
export class TimelogDayComponent implements OnInit{

  timesheetForm: FormGroup;
  constructor(
    private dataService: DataService
  ) {
    this.timesheetForm = new FormGroup({
      project: new FormControl(null),
      time: new FormControl('0. 0'),
      comment: new FormControl('')
    });


  }

  focus = false;
  project: Project = null;

  data: Data = {
    timesheets: [
      {project: null, time: null, comment: null}
    ],
    projects: [
      {name: null, color: null }
    ]
  };;

  dataSource;
  displayedColumns = ['project', 'time', 'comment'];

  log() {
    console.log('change');
    // if (this.focus === false) {
    //   this.focus = true;
    //   setTimeout(() => {
    //     this.saveTimesheet(this.timesheetForm.value);
    //     this.resetTimesheet(this.timesheetForm);
    //     this.focus = false;
    //   }, 1000);
    // }
  }

  resetTimesheet(form) {
    form.reset();
  }

  // saveTimesheet(date) {
  //   for (const key in date) {
  //     if (key === 'project') {
  //       const name = 'project';
  //       console.log(date[name]);
  //     }
  //     if (key === 'time') {
  //       const name = 'time';
  //       console.log(date[name]);
  //     }
  //     if (key === 'comment') {
  //       const name = 'comment';
  //       console.log(date[name]);
  //     }
  //   }
  // }

  deleteTimesheet(index: number): void {
    this.dataSource.data.splice(index, 1);
    this.dataSource = new MatTableDataSource<Timesheet>( this.dataSource.data );
  }

  getTotalCost(): number {
    return this.data.timesheets.map(t => t.time).reduce((acc, value) => acc + value, 0);
  }

  ngOnInit() {
    this.dataService.getData()
      .subscribe((data: {result: string}) => {
        this.data = JSON.parse(data.result);
        this.dataSource = new MatTableDataSource<Timesheet>( this.data.timesheets );
      });
  }
}
