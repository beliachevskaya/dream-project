import {ChangeDetectionStrategy, Component, forwardRef, Input} from '@angular/core';
import {Project} from '../timelog-day/timelog-day.component';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-timelog-select',
  templateUrl: './timelog-select.component.html',
  styleUrls: ['./timelog-select.component.sass'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TimelogSelectComponent),
      multi: true,
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimelogSelectComponent implements ControlValueAccessor {

  @Input()
  projects: Project[] = [];

  project: Project = null;

  projectSelect(project: Project): void {
    this.writeValue(project.name);
    this.onTouched();
  }

  writeValue(project: string): void {
    if (!project || typeof project !== 'string') {
      return;
    }
    const selectedEl = this.projects.find(el => el.name === project);
    if (selectedEl) {
      this.project = selectedEl;
      this.onChange(this.project.name);
    }
  }

  onChange: any = (): void => {
  }

  onTouched: any = (): void => {
  }

  registerOnChange(fn): void {
    this.onChange = fn;
  }

  registerOnTouched(fn): void {
    this.onTouched = fn;
  }

}
