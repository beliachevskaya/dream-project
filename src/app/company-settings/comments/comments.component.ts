import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.sass']
})
export class CommentsComponent implements OnInit {
  @Input() company;
  ngOnInit() { }
  changeComment() {
    this.company.commentRequire = !this.company.commentRequire;
  }
}
