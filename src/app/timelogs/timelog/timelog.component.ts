import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

export interface Timesheet {
  id: number;
  project: string;
  time: number;
  comment: string;
}

export interface Marks {
  id: number;
  name: string;
  color: string;
}

@Component({
  selector: 'app-timelog',
  templateUrl: './timelog.component.html',
  styleUrls: ['./timelog.component.sass']
})
export class TimelogComponent {

  time: Array<number>;

  constructor() {

  }

  timesheets: Timesheet[] = [
    {id: 1, project: `Skype`, time: 2.25, comment: '#435: added localization on landing page'},
    {id: 2, project: `Mifot`, time: 1.5, comment: 'never work'},
  ];

  dataSource = new MatTableDataSource<Timesheet>( this.timesheets );

  displayedColumns = ['project', 'time', 'comment'];



  mark: Marks = null;
  marks: Marks[] = [
    {id: 1, name: 'Windows', color: 'red' },
    {id: 2, name: 'Skype', color: 'yellow' },
    {id: 3, name: 'Mifot', color: 'blue' }
  ];

  deleteTimesheet(index: number): void {
    this.dataSource.data.splice(index, 1);
    console.log(this.dataSource.data);
    this.dataSource = new MatTableDataSource<Timesheet>( this.dataSource.data );
  }

  getTotalCost(): number {
    return this.timesheets.map(t => t.time).reduce((acc, value) => acc + value, 0);
  }
}
