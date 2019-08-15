import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Data} from './timelog-day/timelog-day.component';

// const data2: Data = {
//   timesheets: [
//     {project: 'Windows', time: 2.25, comment: '#435: added localization on landing page'},
//     {project: 'Microsoft', time: 4.5, comment: 'never work'}
//   ],
//   projects: [
//     {name: 'Windows', color: 'red'},
//     {name: 'Skype', color: 'yellow'},
//     {name: 'Mifot', color: 'blue'},
//     {name: 'Microsoft', color: 'green'}
//   ]
// };

@Injectable()

export class DataService {

  constructor(
    private http: HttpClient
  ) {
  }

  setData(value) {
    const lock = new HttpParams()
      .append('f', 'LOCKGET')
      .append('n', 'GLEB_TIMESHEET')
      .append('p', '12345');

    const update = new HttpParams()
      .append('f', 'UPDATE')
      .append('n', 'GLEB_TIMESHEET')
      .append('p', '12345')
      .append('v', JSON.stringify(value));

    this.http
      .post('https://fe.it-academy.by/AjaxStringStorage2.php', lock)
      .subscribe((requestValue) => {
        this.http
          .post('https://fe.it-academy.by/AjaxStringStorage2.php', update)
          .subscribe((requestValue2) => {
            console.log(requestValue2);
          });
      });
  }

  getData() {
    const read = new HttpParams()
      .append('f', 'READ')
      .append('n', 'GLEB_TIMESHEET');

    return this.http
      .post('https://fe.it-academy.by/AjaxStringStorage2.php', read);
  }
}
