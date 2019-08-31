import { Injectable } from '@angular/core';
import { Project, Team, TeamMember } from './projects.model';
import { Subject } from 'rxjs/Subject';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable()
export class ProjectsService {
  team: Team;
  teamMember: TeamMember;
  allMembers: string[] = ['Max', 'Gleb', 'Dima', 'Natalia'];
  projectsChanged = new Subject<void>();
  constructor(private db: AngularFirestore) {}

  addProjectToDatabase(project: Project) {
    this.db.collection<Project>('projects').add(project);
    this.projectsChanged.next();
  }

}
