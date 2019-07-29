import { Component, OnInit } from "@angular/core";

interface IcompanyProperties {
  name: string;
  activities: any[];
  defaultProjects: any[];
  startWeekDay: string;
  workload: any[];
}

@Component({
  selector: "app-company-properties",
  templateUrl: "./company-properties.component.html",
  styleUrls: ["./company-properties.component.sass"]
})
export class CompanyPropertiesComponent implements OnInit {
  private cp: IcompanyProperties = {
    name: "Microsoft inc.",
    activities: [
      { label: "Vacation", checked: true },
      { label: "Sick Leave", checked: false },
      { label: "Business Trip", checked: true }
    ],
    defaultProjects: [
      { project: "Adaptation", checked: true },
      { project: "Adaptation2", checked: true },
      { project: "Adaptation3", checked: false }
    ],
    startWeekDay: "Sunday",
    workload: [35, "week"]
  };

  public name: string;
  public activities: any[];
  public defaultProjects: any[] = [];
  public startWeekDay: any[] = [["Sunday", "Monday"], "Monday"];
  public workload: any[] = [40, "week"];

  constructor() {
    this.name = this.cp.name;
    this.activities = this.cp.activities;
    this.defaultProjects = this.cp.defaultProjects;
    this.startWeekDay[1] = this.cp.startWeekDay;
    this.workload = this.cp.workload;
  }

  ngOnInit() {}
}
