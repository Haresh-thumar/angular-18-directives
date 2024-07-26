import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[acceptAlphabetCharOnly]',
  standalone: true,
})
export class AlphabeticOnlyDirective {
  // Input property to set max length
  @Input('acceptAlphabetCharOnly') maxLength?: number;

  constructor(private el: ElementRef, private control: NgControl) {}

  // Listen for input changes
  @HostListener('input', ['$event']) onInputChange(event: Event) {
    // Get the current value of the input
    const initialValue = this.el.nativeElement.value;
    // Remove any non-alphabetic characters and apply max length
    let filteredValue = initialValue.replace(/[^a-zA-Z ]/g, '');
    if (this.maxLength !== undefined) {
      filteredValue = filteredValue.substring(0, this.maxLength);
    }
    // Set the input's value to the filtered value
    this.el.nativeElement.value = filteredValue;

    // If the initial value was different from the filtered value, stop propagation to prevent further processing
    if (initialValue !== filteredValue) {
      // Update the form control value
      this.control.control?.setValue(filteredValue);
      event.stopPropagation();
    }
  }

  // Listen for paste events
  @HostListener('paste', ['$event']) onPaste(event: ClipboardEvent) {
    // Prevent the default paste action
    event.preventDefault();
    // Get the pasted text and filter it
    let pastedInput = event.clipboardData
      ?.getData('text/plain')
      .replace(/[^a-zA-Z ]/g, '');
    if (this.maxLength !== undefined) {
      // Apply max length to pasted input
      const currentLength = this.el.nativeElement.value.length;
      const remainingLength = this.maxLength - currentLength;
      pastedInput = pastedInput?.substring(0, remainingLength);
    }
    // Insert the filtered text into the input
    if (pastedInput) {
      document.execCommand('insertText', false, pastedInput);
      // Update the form control value after paste
      this.control.control?.setValue(this.el.nativeElement.value);
    }
  }
}
