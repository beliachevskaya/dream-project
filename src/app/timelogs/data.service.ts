import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {Data} from './timelog-day/timelog-day.component';

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
      .append('v', 'hello');

    return this.http
      .post('https://fe.it-academy.by/AjaxStringStorage2.php', read);
  }
}
