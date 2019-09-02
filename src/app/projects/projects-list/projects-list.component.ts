import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Project, Team } from '../projects.model';
import { ProjectsService } from '../projects.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Subscription } from 'rxjs';
import { CompanyService } from '../../myTest/company.service';
import { MyUserService } from '../../myTest/user.service';
@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.sass']
})
export class ProjectsListComponent implements OnInit, OnDestroy {
  dataSource = new MatTableDataSource<Project>();
  displayedColumns: string[] = ['color', 'name', 'code', 'team', 'start', 'progress', 'end', 'play', 'stop' ];
  projects: Project[];
  allProjects: any[];
  currentCompanyProjectsList: Project[];
  currentCompanyProjectsListArch: Project[];
  currentCompanyProjectsListAct: Project[];
  status: string = 'in progress';
  currentUser: any;
  // tslint:disable-next-line: no-inferrable-types
  currentCompany: any;
  private exChangedSubscription: Subscription;
  private unSubscriptionCurrentCompany: Subscription;
  private unsubscriber: Subscription;

  constructor(
    private projectsService: ProjectsService,
    private db: AngularFirestore,
    private companyService: CompanyService,
    private userService: MyUserService
    ) {}

  ngOnInit() {
    this.currentUser = this.userService.getCurrentUser;
    console.log(this.currentUser);
    this.unsubscriber = this.companyService.currentCompanyPage.subscribe(() => {
      this.currentCompany = this.companyService.getCurrentCompany();
    });
    console.log(this.currentCompany);
    this.projectsService.fetchProjectsChanged();
    this.exChangedSubscription = this.projectsService.projectsChanged.subscribe(
      (projects: Project[]) => {
        this.currentCompanyProjectsList = projects.filter(project => {
          if ((project.company === this.currentCompany.name) && (project.status !== 'archived')) {
            return project;
          }
        });
        console.log(this.currentCompanyProjectsList);
        this.dataSource.data = this.currentCompanyProjectsList;
      }
    );
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onSaved(newStatus: string) {
    this.status = newStatus;
    console.log(this.status);
    this.projectsService.fetchProjectsChanged();
    this.exChangedSubscription = this.projectsService.projectsChanged.subscribe(
      (projects: Project[]) => {
        if (this.status !== 'archived') {
          this.currentCompanyProjectsList = projects.filter(project => {
            if ((project.company === this.currentCompany.name) && (project.status !== 'archived')) {
              return project;
            }
          });
        } else if (this.status === 'archived') {
          this.currentCompanyProjectsList = projects.filter(project => {
            if ((project.company === this.currentCompany.name) && (project.status === 'archived')) {
              return project;
            }
          });
        }
        console.log(this.currentCompanyProjectsList);
        this.dataSource.data = this.currentCompanyProjectsList;
      }
    );
  }

  changeStatus(project, newStatus) {
    this.status = newStatus;
    // this.projectsService.fetchProjectsChanged();
    // this.exChangedSubscription1 = this.projectsService.projectsChanged.subscribe(
    //   if ((project.company === this.currentCompany) {
    //   this.project = project;
    //         }
    //       });
    //     }
    //   });
  }

  ngOnDestroy() {
    if (this.exChangedSubscription) {
      this.exChangedSubscription.unsubscribe();
      this.exChangedSubscription = null;
    }
    if (this.unSubscriptionCurrentCompany) {
      this.unSubscriptionCurrentCompany.unsubscribe();
      this.unSubscriptionCurrentCompany = null;
    }
    this.unsubscriber.unsubscribe();
  }
}

