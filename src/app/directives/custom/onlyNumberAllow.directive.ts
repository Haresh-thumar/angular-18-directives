import {
  Directive,
  ElementRef,
  Renderer2,
  HostListener,
  Input,
  OnInit,
  inject,
} from '@angular/core';

@Directive({
  selector: '[appOnlyNumberAllow]',
  standalone: true,
})
export class OnlyNumberAllowDirective implements OnInit {
  private el = inject(ElementRef);
  private renderer = inject(Renderer2);

  @Input() appOnlyNumberAllow?: number;

  ngOnInit() {
    // Remove the arrows from the input if it's a number input
    if (this.el.nativeElement.type === 'number') {
      this.renderer.setAttribute(this.el.nativeElement, 'type', 'text');
      this.renderer.setStyle(this.el.nativeElement, 'appearance', 'none');
      this.renderer.setStyle(
        this.el.nativeElement,
        '-moz-appearance',
        'textfield'
      );
      this.renderer.setStyle(
        this.el.nativeElement,
        '-webkit-appearance',
        'none'
      );
    }

    // Set the max length attribute on the input element
    if (this.appOnlyNumberAllow) {
      this.renderer.setAttribute(
        this.el.nativeElement,
        'maxlength',
        this.appOnlyNumberAllow.toString()
      );
    }
  }

  @HostListener('input', ['$event']) onInputChange(event: any) {
    const initialValue = this.el.nativeElement.value;
    this.el.nativeElement.value = initialValue.replace(/[^0-9]/g, '');

    // Enforce the max length
    if (
      this.appOnlyNumberAllow &&
      this.el.nativeElement.value.length > this.appOnlyNumberAllow
    ) {
      this.el.nativeElement.value = this.el.nativeElement.value.slice(
        0,
        this.appOnlyNumberAllow
      );
    }

    if (initialValue !== this.el.nativeElement.value) {
      event.stopPropagation();
    }
  }

  @HostListener('keydown', ['$event']) onKeyDown(event: KeyboardEvent) {
    if (event.key.length === 1 && !/[0-9]/.test(event.key)) {
      event.preventDefault();
    }
  }
}
