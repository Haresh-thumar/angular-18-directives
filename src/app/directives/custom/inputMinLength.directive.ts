import { Directive, Input, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appMinLength]',
  standalone: true,
})
export class InputMinLengthDirective {
  @Input('appMinLength') appMinLength: number = 0;

  constructor(private control: NgControl) {}

  @HostListener('input') onInput() {
    const control = this.control.control;
    if (control) {
      const inputValue: string = control.value || '';
      if (inputValue.length < this.appMinLength) {
        control.setErrors({
          appMinLength: `Minimum length is ${this.appMinLength} characters.`,
        });
      } else {
        control.setErrors(null);
      }
    }
  }
}
