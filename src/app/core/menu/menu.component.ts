import { Component, OnInit, Input } from '@angular/core';
import { Iuser } from '../../myTest/user.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {
  @Input() currentUser: Iuser;
  constructor() {}

  ngOnInit() {}
}
