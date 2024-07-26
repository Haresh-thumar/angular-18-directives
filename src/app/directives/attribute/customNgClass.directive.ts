import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  Renderer2,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[appCustomNgClass]',
  standalone: true,
})
export class CustomClassDirective implements OnChanges {
  @Input('appCustomNgClass') customClasses:
    | { [key: string]: boolean }
    | string[] = {};

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['customClasses']) {
      this.updateClasses();
    }
  }

  private updateClasses(): void {
    // Remove all previously applied classes
    this.resetClasses();

    // Apply the new classes
    if (Array.isArray(this.customClasses)) {
      this.customClasses.forEach((className) => {
        this.renderer.addClass(this.el.nativeElement, className);
      });
    } else {
      for (const [className, shouldApply] of Object.entries(
        this.customClasses
      )) {
        if (shouldApply) {
          this.renderer.addClass(this.el.nativeElement, className);
        } else {
          this.renderer.removeClass(this.el.nativeElement, className);
        }
      }
    }
  }

  private resetClasses(): void {
    const classes = this.el.nativeElement.className.split(' ');
    classes.forEach((className: any) => {
      if (className) {
        this.renderer.removeClass(this.el.nativeElement, className);
      }
    });
  }
}
