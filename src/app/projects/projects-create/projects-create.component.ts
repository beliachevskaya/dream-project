import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ProjectsService } from '../projects.service';
import { Project, Team, TeamMember } from '../projects.model';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-projects-create',
  templateUrl: './projects-create.component.html',
  styleUrls: ['./projects-create.component.sass']
})

export class ProjectsCreateComponent implements OnInit {
  typeProject = ['Fixed resources', 'Time & Material'];
  colors: string[] = ['#FF0000', '#FF9900', '#FFD600', '#00C537', '#109CF1', '#0047FF', '#9E00FF',
  '#000000', '#FF007A', '#AD5300', '#FFF500', 'rgba(0, 224, 22, 0.6)', '#2CD9FF', '#5438FF',
  '#DB00FF', '#8F8F8F', '#FF8A8A', '#FFCE84', '#FFF09F', '#99FCC1', '#9FDBFF',
  '#98B5FF', '#E0AEFF', '#E2E1E1' ];
  name: string;
  color: string;
  code: string;
  status: string;
  type: string;
  startDate: string;
  endDate: string;
  totalWorkload: number;
  team: Team;
  project: Project = new Project();
  hasControl = false;
  teamMember: TeamMember;
  projectSubscroption: Subscription;

  constructor(private db: AngularFirestore, private projectsService: ProjectsService) {
    // this.project = this.db.collection('projects');
  }

  ngOnInit() {
    this.project.status = 'in progress';
    this.project.totalWorkload = 0;
    this.project.endDate = '';
    this.db.collection('users').valueChanges().subscribe(name => {console.log(name); });
    // this.projectSubscroption = this.projectsService.projectCreated.subscribe();
  }

  changeControl() {
    if (this.hasControl === true) {
      this.hasControl = false;
    } else {
      this.hasControl = true;
    }
  }

  changeColor(item) {
    this.project.color = item;
    this.hasControl = false;
  }

  addProject(project: Project) {
    console.log(this.project);
    const createProject = JSON.parse(JSON.stringify(this.project));
    this.projectsService.addProjectToDatabase(createProject);
  }

  onChangeStatusPaused() {
    this.project.status = 'paused';
  }

  onChangeStatusArchived() {
    this.project.status = 'archived';
  }

  onSaved(team) {
    this.project.team = team;
    console.log(this.team);
  }
}
