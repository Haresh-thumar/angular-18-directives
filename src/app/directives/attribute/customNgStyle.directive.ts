import {
  Directive,
  ElementRef,
  Input,
  Renderer2,
  OnChanges,
  SimpleChanges,
  inject,
} from '@angular/core';

@Directive({
  selector: '[appCustomNgStyle]',
  standalone: true,
})
export class CustomNgStyleDirective implements OnChanges {
  private el = inject(ElementRef);
  private renderer = inject(Renderer2);

  @Input('appCustomNgStyle') customStyles: { [key: string]: string } = {};

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['customStyles']) {
      this.applyStyles();
    }
  }

  private applyStyles(): void {
    for (const [key, value] of Object.entries(this.customStyles)) {
      this.renderer.setStyle(this.el.nativeElement, key, value);
    }
  }
}
