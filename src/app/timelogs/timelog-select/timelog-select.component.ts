import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-timelog-select',
  templateUrl: './timelog-select.component.html',
  styleUrls: ['./timelog-select.component.sass']
})
export class TimelogSelectComponent implements OnInit {

  constructor() { }

  @Input()
  marks: object[];

  mark: object = null;

  ngOnInit() {
  }

}
