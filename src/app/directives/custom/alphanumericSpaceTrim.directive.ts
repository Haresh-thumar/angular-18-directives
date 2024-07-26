import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appAlphaNumSpaceTrim]',
  standalone: true,
})
export class AlphaNumSpaceTrimDirective implements OnInit {
  // Make the input property optional with the `?` operator
  @Input() appAlphaNumSpaceTrim?: number;
  private regex: RegExp = new RegExp(/^[a-zA-Z0-9 ]*$/);
  private specialKeys: Array<string> = [
    'Backspace',
    'Tab',
    'End',
    'Home',
    'ArrowLeft',
    'ArrowRight',
    'Delete',
  ];

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private control: NgControl
  ) {}

  ngOnInit() {
    if (this.appAlphaNumSpaceTrim !== undefined) {
      // Check if the maxLength input is defined and set it as an attribute
      this.renderer.setAttribute(
        this.el.nativeElement,
        'maxlength',
        this.appAlphaNumSpaceTrim.toString()
      );
    }
  }

  @HostListener('keydown', ['$event']) onKeyDown(event: KeyboardEvent) {
    if (this.specialKeys.includes(event.key)) {
      return;
    }
    const current: string = this.el.nativeElement.value;
    const next: string = current.concat(event.key);
    if (next && !this.regex.test(next)) {
      event.preventDefault();
    }
  }

  @HostListener('paste', ['$event']) onPaste(event: ClipboardEvent) {
    // Use the nullish coalescing operator `??` to handle null or undefined clipboardData
    const pasteData = event.clipboardData?.getData('text') ?? '';
    const current: string = this.el.nativeElement.value;
    const next: string = current.concat(pasteData);
    if (next && !this.regex.test(next)) {
      event.preventDefault();
    }
  }

  @HostListener('blur')
  onBlur(): void {
    // Check if the control's value is a string before proceeding
    const currentValue = this.control.value;
    if (typeof currentValue === 'string') {
      const trimmedValue = currentValue.trim();
      this.control.control?.setValue(trimmedValue);

      // Update errors if the trimmed value is empty
      if (trimmedValue === '') {
        this.control.control?.setErrors({ required: true });
      } else {
        this.control.control?.updateValueAndValidity();
      }
    }
  }
}
