import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-notification-preferences',
  templateUrl: './notification-preferences.component.html',
  styleUrls: ['./notification-preferences.component.sass']
})
export class NotificationPreferencesComponent implements OnInit {
  @Input() user: any;
  public buttonDisabled = false;
  items = new FormControl();

  constructor() { }

  ngOnInit() { }
  onToggle = checked => (checked = !checked);

  onSave = event => console.log(event);
}
