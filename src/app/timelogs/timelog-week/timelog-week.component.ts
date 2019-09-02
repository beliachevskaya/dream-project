import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-timelog-week',
  templateUrl: './timelog-week.component.html',
  styleUrls: ['./timelog-week.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimelogWeekComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
