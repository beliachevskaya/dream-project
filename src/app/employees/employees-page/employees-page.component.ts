import { Component, Input, OnInit, OnChanges, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-employees-page',
  templateUrl: './employees-page.component.html',
  styleUrls: ['./employees-page.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeesPageComponent implements OnInit, OnChanges {
  @Input() employees: any;
  public data: any;
  public filter = true;
  public column: string[] = ['Avatar', 'Name', 'Role', 'Planned / Actual (hours per week)', 'Pending Approval'];

  ngOnInit() {
    this.data = this.employees;
  }
  ngOnChanges() {
    this.data = this.employees;
  }

}
