import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

export interface Timesheet {
  id: number;
  project: string;
  time: number;
  comment: string;
}

@Component({
  selector: 'app-timelog',
  templateUrl: './timelog.component.html',
  styleUrls: ['./timelog.component.sass']
})
export class TimelogComponent {
  constructor() {
    console.log(this.mark);
  }

  timesheets: Timesheet[] = [
    {id: 1, project: `Skype`, time: 2.25, comment: '#435: added localization on landing page'},
    {id: 2, project: `Mifot`, time: 1.5, comment: 'never work'},
  ];

  dataSource = new MatTableDataSource<Timesheet>( this.timesheets );

  displayedColumns = ['project', 'time', 'comment'];



  mark: object = null;
  marks: object[] = [
    {id: 1, name: 'test1', color: 'red'},
    {id: 2, name: 'test2', color: 'orange'},
    {id: 3, name: 'test3', color: 'yellow'},
    {id: 4, name: 'test4', color: 'blue'},
  ];

  removeRow() {

  }

  deleteTimesheet(index) {
    this.dataSource.data.splice(index, 1);
    // console.log(this.dataSource.data);
    this.dataSource = new MatTableDataSource<Timesheet>( this.dataSource.data );
  }

  getTotalCost() {
    return this.timesheets.map(t => t.time).reduce((acc, value) => acc + value, 0);
  }
}
