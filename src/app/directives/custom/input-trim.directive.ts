import { Directive, HostListener, inject } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appInputTrim]',
  standalone: true,
})
export class InputTrimDirective {
  private control = inject(NgControl);

  @HostListener('blur')
  onBlur(): void {
    // Check if control and control value exist
    if (
      this.control &&
      this.control.value &&
      typeof this.control.value === 'string'
    ) {
      const trimmedValue = this.control.value.trim();

      // Ensure control is not null before setting the value
      this.control.control?.setValue(trimmedValue);

      // Update the validity of the control if necessary
      this.control.control?.updateValueAndValidity();
    }
  }
}
