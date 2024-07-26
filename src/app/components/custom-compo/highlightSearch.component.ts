import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HighlightSearchDirective } from '../../directives/custom/highlightSearch.directive';

@Component({
  selector: 'app-highlight-search',
  standalone: true,
  imports: [FormsModule, HighlightSearchDirective],
  template: `
    <div class="container">
      <div class="three">
        <h1 class="heading">Highlight Search Directive</h1>
      </div>
      <div class="mb-3">
        <input
          [(ngModel)]="searchQuery"
          class="form-control"
          placeholder="Enter search query"
        />
      </div>

      <div class="mt-3">
        <h3>Text with Highlighting:</h3>
        <p [appHighlightSearch]="searchQuery">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    </div>
  `,
  styles: [``],
})
export class AppHighlightSearchComponent {
  searchQuery = '';
}
