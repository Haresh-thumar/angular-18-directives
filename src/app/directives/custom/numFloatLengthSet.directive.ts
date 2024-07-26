import {
  Directive,
  Input,
  ElementRef,
  forwardRef,
  HostListener,
  inject,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  selector: '[appNumFloatLengthSet]',
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NumFloatLengthSetDirective),
      multi: true,
    },
  ],
})
export class NumFloatLengthSetDirective implements ControlValueAccessor {
  private el = inject(ElementRef<HTMLInputElement>);
  @Input() appNumFloatLengthSet?: number;
  @Input() setFloatDigit?: number;

  private onChange: (value: number | null) => void = () => {};
  private onTouched: () => void = () => {};

  @HostListener('input', ['$event'])
  onInput(event: InputEvent) {
    const input = event.target as HTMLInputElement;
    const cursorPosition = input.selectionStart;
    let newValue = input.value.replace(/[^0-9.]/g, '');

    const parts = newValue.split('.');

    // Apply max length to the integer part
    if (this.appNumFloatLengthSet != null) {
      parts[0] = parts[0].slice(0, this.appNumFloatLengthSet);
    }

    // Handle decimal part
    if (this.setFloatDigit != null) {
      // Ensure only one decimal point
      if (parts.length > 2) {
        parts.splice(2);
      }

      // Apply max length to the decimal part
      if (parts.length > 1) {
        parts[1] = parts[1].slice(0, this.setFloatDigit);
      }
    } else {
      // If setFloatDigit is not defined, remove any decimal part
      parts.splice(1);
    }

    newValue = parts.join('.');

    // Update the input value if it has changed
    if (newValue !== input.value) {
      input.value = newValue;
      input.setSelectionRange(cursorPosition, cursorPosition);
    }

    this.onChange(newValue ? parseFloat(newValue) : null);
  }

  @HostListener('blur')
  onBlur() {
    this.onTouched();
    if (this.el.nativeElement.value && this.setFloatDigit != null) {
      const parts = this.el.nativeElement.value.split('.');
      if (parts.length > 1) {
        parts[1] = parts[1].padEnd(this.setFloatDigit, '0');
        const newValue = parts.join('.');
        this.el.nativeElement.value = newValue;
        this.onChange(parseFloat(newValue));
      }
    }
  }

  @HostListener('keypress', ['$event'])
  onKeyPress(event: KeyboardEvent) {
    const inputChar = String.fromCharCode(event.charCode);
    const currentValue = this.el.nativeElement.value;

    // Allow digits
    if (/\d/.test(inputChar)) {
      return;
    }

    // Allow decimal point if setFloatDigit is defined and there isn't already a decimal point
    if (
      inputChar === '.' &&
      this.setFloatDigit != null &&
      !currentValue.includes('.')
    ) {
      return;
    }

    // Prevent any other input
    event.preventDefault();
  }

  writeValue(value: number | null): void {
    this.el.nativeElement.value = value != null ? value.toString() : '';
  }

  registerOnChange(fn: (value: number | null) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.el.nativeElement.disabled = isDisabled;
  }
}
