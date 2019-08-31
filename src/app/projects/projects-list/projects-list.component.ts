import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Project, Team } from '../projects.model';
import { ProjectsService } from '../projects.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.sass']
})
export class ProjectsListComponent implements OnInit, OnDestroy {
  dataSource = new MatTableDataSource<Project>();
  displayedColumns: string[] = ['color', 'name', 'code', 'team', 'start', 'progress', 'end', 'play', 'stop' ];
  projects: Project[];
  private exChangedSubscription: Subscription;

  constructor(private projectsService: ProjectsService, private db: AngularFirestore) {}

  ngOnInit() {
    this.exChangedSubscription = this.projectsService.projectsChanged.subscribe(
      (projects: Project[]) => {
        this.dataSource.data = projects;
      }
    );
    this.projectsService.fetchProjectsChanged();
  }
  ngOnDestroy() {
    this.exChangedSubscription.unsubscribe();
  }
}
