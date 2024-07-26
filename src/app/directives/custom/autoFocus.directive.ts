import { Directive, ElementRef, HostListener, inject } from '@angular/core';

@Directive({
  selector: '[appAutoFocus]',
  standalone: true,
})
export class AutoFocusDirective {
  private el = inject(ElementRef);
  @HostListener('focus')
  onFocus(): void {
    this.el.nativeElement.select();
  }
}
