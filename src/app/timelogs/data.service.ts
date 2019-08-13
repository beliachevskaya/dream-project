import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {Data} from './timelog-day/timelog-day.component';

const data: Data = {
  timesheets: [
    {project: `Skype`, time: 2.25, comment: '#435: added localization on landing page'},
    {project: `Mifot`, time: 1.5, comment: 'never work'}
  ],
  projects: [
    {name: 'Windows', color: 'red' },
    {name: 'Skype', color: 'yellow' },
    {name: 'Mifot', color: 'blue' }
  ]
};

@Injectable()

export class DataService {

  constructor(
    private http: HttpClient
  ) {
  }

  getData() {
    const read = new HttpParams()
      .append('f', 'READ')
      .append('n', 'GLEB_TIMESHEET');

    const block = new HttpParams()
      .append('f', 'LOCKGET')
      .append('n', 'GLEB_TIMESHEET')
      .append('p', '12345');

    const update = new HttpParams()
      .append('f', 'UPDATE')
      .append('n', 'GLEB_TIMESHEET')
      .append('p', '12345')
      .append('v', JSON.stringify(data));

    return this.http
      .post('https://fe.it-academy.by/AjaxStringStorage2.php', read);
  }
}
