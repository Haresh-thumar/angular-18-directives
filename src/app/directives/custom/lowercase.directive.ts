import {
  Directive,
  ElementRef,
  HostListener,
  Renderer2,
  forwardRef,
} from '@angular/core';
import { DefaultValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  selector: '[appToLowercase]',
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => LowercaseInputDirective),
    },
  ],
})
export class LowercaseInputDirective extends DefaultValueAccessor {
  @HostListener('input', ['$event']) input($event: InputEvent) {
    const target = $event.target as HTMLInputElement;
    const start = target.selectionStart;
    const end = target.selectionEnd;

    // Convert entire value to uppercase
    const updatedValue = target.value.toLowerCase();

    // Update the input value
    target.value = updatedValue;

    // Restore the cursor position
    target.setSelectionRange(start, end);

    // Notify Angular's form control of the change
    this.onChange(target.value);
  }

  constructor(renderer: Renderer2, elementRef: ElementRef) {
    super(renderer, elementRef, false);
  }
}
