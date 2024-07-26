import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[appHighlightSearch]',
  standalone: true,
})
export class HighlightSearchDirective implements OnChanges {
  @Input() appHighlightSearch?: string;

  constructor(private el: ElementRef) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['appHighlightSearch']) {
      this.highlightText();
    }
  }

  private highlightText() {
    const text = this.el.nativeElement.innerText;
    if (this.appHighlightSearch && this.appHighlightSearch.length > 0) {
      const regex = new RegExp(
        `(${this.escapeRegExp(this.appHighlightSearch)})`,
        'gi'
      );
      const highlightedText = text.replace(regex, '<mark>$1</mark>');
      this.el.nativeElement.innerHTML = highlightedText;
    } else {
      // If search query is empty, restore original text
      this.el.nativeElement.innerHTML = text;
    }
  }

  private escapeRegExp(query: string): string {
    return query.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
  }
}
