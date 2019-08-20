import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appSelect]'
})
export class SelectDirective {
  constructor(private elementRef: ElementRef) {}
}
