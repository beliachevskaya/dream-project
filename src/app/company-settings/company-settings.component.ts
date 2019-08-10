import { Component, OnInit } from '@angular/core';
export const enum WeekDay {
  Sun = 'Sunday',
  Mon = 'Monday'
}

export interface IcompanyProperties {
  name: string;
  activities: any[];
  defaultProjects: any[];
  startWeekDay: WeekDay;
  workload: [number, string];
}

@Component({
  selector: 'app-company-settings',
  templateUrl: './company-settings.component.html',
  styleUrls: ['./company-settings.component.sass']
})
export class CompanySettingsComponent implements OnInit {
  public Company: IcompanyProperties = {
    name: 'Microsoft inc.',
    activities: [
      { label: 'Vacation', checked: true },
      { label: 'Sick Leave', checked: false },
      { label: 'Business Trip', checked: true }
    ],
    defaultProjects: [
      { project: 'Adaptation', checked: true },
      { project: 'Adaptation2', checked: true },
      { project: 'Adaptation3', checked: false }
    ],
    startWeekDay: WeekDay.Mon,
    workload: [35, 'week']
  };
  ngOnInit() {}
}
