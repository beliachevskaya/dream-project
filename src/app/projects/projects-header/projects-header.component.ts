import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-projects-header',
  templateUrl: './projects-header.component.html',
  styleUrls: ['./projects-header.component.sass']
})
export class ProjectsHeaderComponent implements OnInit {
  status: string = 'in progress';
  currentUser;

  @Output() onSaved = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onChangeStatus(newStatus: string) {
    this.status = newStatus;
    this.onSaved.emit(this.status);
  }
}
