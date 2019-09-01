import {ChangeDetectionStrategy, Component, forwardRef, Input, OnInit} from '@angular/core';
import {Timesheet} from '../timelog-day/timelog-day.component';
import {Project} from '../timelog-day/timelog-day.component';
import {NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-timelog-select',
  templateUrl: './timelog-select.component.html',
  styleUrls: ['./timelog-select.component.sass'],
  // providers: [
  //   {
  //     provide: NG_VALUE_ACCESSOR,
  //     useExisting: forwardRef(() => TimelogSelectComponent),
  //     multi: true,
  //   }
  // ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimelogSelectComponent implements OnInit {

  constructor() {
  }

  // @Input()
  projects: Project[] =  [
    {name: 'Windows', color: 'red'},
    {name: 'Skype', color: 'yellow'},
    {name: 'Mifot', color: 'blue'},
    {name: 'Microsoft', color: 'green'}
  ];

  // @Input()
  timesheets: Timesheet =  {project: 'Windows', time: '2.25', comment: '#435: added localization on landing page'};

  project: object = this.projects;

  // writeValue(value) {
  //   if (!value || typeof value !== 'string') {
  //     return
  //   }
  //   const selectedEl = this.options.find(el => el.value === value);
  //   if (selectedEl) {
  //     this.selectedOption = selectedEl;
  //     this.onChange(this.selectedOption.value);
  //   }
  // }

  ngOnInit() {
    // const firstElement = 2;
    // this.project = this.projects[firstElement];
  }

  // registerOnChange(fn) {
  //   this.onChange = fn;
  // }
  //
  // registerOnTouched(fn) {
  //   this.onTouched = fn;
  // }
}
