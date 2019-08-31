import { Injectable } from '@angular/core';
import { Project, Team, TeamMember } from './projects.model';
import { Subject } from 'rxjs/Subject';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Injectable()
export class ProjectsService {
  team: Team;
  teamMember: TeamMember;
  allMembers: string[] = ['Max', 'Gleb', 'Dima', 'Natalia'];
  projectsChanged = new Subject<Project[]>();
  projects: Project[] = [];
  constructor(
    private db: AngularFirestore,
    private router: Router) {}

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
    console.log(this.projects);
  }

}
