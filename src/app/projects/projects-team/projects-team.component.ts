import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { TeamMember, Team, Project } from '../projects.model';
import { ProjectsService } from '../projects.service';
import { NgModel } from '@angular/forms';
import { CompanyService } from '../../myTest/company.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-projects-team',
  templateUrl: './projects-team.component.html',
  styleUrls: ['./projects-team.component.sass']
})
export class ProjectsTeamComponent implements OnInit, OnDestroy {
  currentCompany: any;
  allMembers: string[];
  roles: string[] = ['Project Manager', 'Employee'];
  teamMember: TeamMember;
  team: Team;
  isAddName: boolean;
  isAddRole: boolean;
  isAddWorkload: boolean;
  inputNameDefault: string;
  inputRoleDefault: string;
  inputWorkloadDefault: number;
  project: Project;
  total: number;
  totalArr: number[];
  unSubscriptionCurrentCompany: Subscription;
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onSaved = new EventEmitter<Team>();

  constructor(
    private projectsService: ProjectsService,
    private companyService: CompanyService
    ) { }

  ngOnInit() {
    this.unSubscriptionCurrentCompany = this.companyService.currentCompanyPage.subscribe(() => {
      this.currentCompany = this.companyService.getCurrentCompany();
    });
    this.allMembers = this.currentCompany.employeeList.active;
    this.isAddName = false;
    this.isAddRole = false;
    this.isAddWorkload = false;
    this.team = [];
    this.teamMember = new TeamMember('', '', 0);
    this.inputNameDefault = this.teamMember.name;
    this.inputRoleDefault = this.teamMember.role;
    this.inputWorkloadDefault = this.teamMember.workload;
    this.total = 0;
  }

  addMemberName(event) {
    this.teamMember.name = event;
    this.isAddName = true;
    this.addTeamMember();
  }

  addMemberRole(event) {
    this.teamMember.role = event;
    this.isAddRole = true;
    this.addTeamMember();
  }

  addMemberWorkload(event, wInput) {
    this.teamMember.workload = event;
    wInput.value = 0;
    this.isAddWorkload = true;
    this.addTeamMember();
    this.addTotalWorkload();

  }

  addTeamMember() {
    if (this.isAddWorkload && this.isAddName && this.isAddRole) {
      this.isAddName = false;
      this.isAddRole = false;
      this.isAddWorkload = false;
      this.team.push(this.teamMember);
      this.onSaved.emit(this.team);
      this.teamMember = new TeamMember('', '', 0);
      this.inputNameDefault = this.teamMember.name;
      this.inputRoleDefault = this.teamMember.role;
      this.inputWorkloadDefault = this.teamMember.workload;
      console.log(this.team);
    }
  }

  addTotalWorkload() {
    if (this.team.length > 0) {
      this.totalArr = this.team.map((teamMember, index, array) => {
        return teamMember.workload;
      });
      this.total = this.totalArr.reduce((result, num) => {
        return result + num;
      });
    } else {
      this.total = 0;
    }
    console.log(this.total);
  }

  onChangeName(event, index) {
    this.team[index].name = event;
  }

  onChangeRole(event, index) {
    this.team[index].role = event;
  }

  onChangeWorkload(event, index) {
    this.team[index].workload = event;
    this.addTotalWorkload();
  }

  onDeleteMember(index) {
    this.team.splice(index, 1);
    console.log(this.team);
    this.addTotalWorkload();
  }

  ngOnDestroy() {
    this.unSubscriptionCurrentCompany.unsubscribe();
  }
}
