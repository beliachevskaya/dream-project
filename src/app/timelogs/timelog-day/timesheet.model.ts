import { FormControl, FormGroup, Validators } from '@angular/forms';

export class TimesheetGroup {
  project: string;
  time: string;
  comment: string;

  static asFormGroup(timesheet: TimesheetGroup): FormGroup {
    const fg = new FormGroup({
      project: new FormControl(timesheet.project, Validators.required),
      time: new FormControl(timesheet.time, Validators.required),
      comment: new FormControl(timesheet.comment, Validators.required)
    });
    return fg;
  }
}
