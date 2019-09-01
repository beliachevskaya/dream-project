import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild
} from '@angular/core';
import {DatepickerComponent} from '../datepicker/datepicker.component';

@Component({
  selector: 'app-header-timelogs',
  templateUrl: './header-timelogs.component.html',
  styleUrls: ['./header-timelogs.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
  })
export class HeaderTimelogsComponent {

  constructor(
    private cdr: ChangeDetectorRef
  ) {}

  @Input()
  status: string;

  @Input()
  isDisabled: boolean;

  @ViewChild(DatepickerComponent, {static: false})
  public datepicker: DatepickerComponent;

  @Output() setData = new EventEmitter<boolean>();
  setTimeheets() {
    this.setData.emit();
  }

  @Output() changeDate = new EventEmitter<boolean>();
  setDate() {
    this.changeDate.emit();
  }

}
