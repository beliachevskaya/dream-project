import { Component, OnInit, Input } from '@angular/core';
import { IUser } from '../../myTest/user.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {
  @Input() currentUser: IUser;
  constructor() { }

  ngOnInit() { }
}
