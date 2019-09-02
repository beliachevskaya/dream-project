import { Injectable } from '@angular/core';
import { Project, Team, TeamMember } from './projects.model';
import { Subject } from 'rxjs/Subject';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { CompanyService } from '../myTest/company.service';

export interface User {
  name: string;
}
@Injectable()
export class ProjectsService {
  team: Team;
  teamMember: TeamMember;
  currentProject: Project;
  status: string;
  allMembers: string[] = ['Max', 'Gleb', 'Dima', 'Natalia'];
  projectsChanged = new Subject<Project[]>();
  allProjects: any[];
  projects: Project[] = [];
  currentCompanyProjectsList: Project[];
  currentCompany: any[];


  constructor(
    private db: AngularFirestore,
    private router: Router,
    private companyService: CompanyService
    )  {}

  addProjectToDatabase(project: Project) {
    this.db.collection<Project>('projects').add(project);
    this.router.navigate(['/projects']);
  }

  fetchProjectsChanged() {
    this.db
      .collection('projects')
      .valueChanges()
      .subscribe((projects: Project[]) => {
        this.projectsChanged.next(projects);
      });
  }

}
