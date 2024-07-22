import { Component } from '@angular/core';
import { CustomNgIfDirective } from '../../directives/structural/customNgIf.directive';

@Component({
  selector: 'app-CustomNgIf',
  standalone: true,
  imports: [CustomNgIfDirective],
  template: `
    <!-------------- CustomNgIf Pipe ---------------->
    <div class="three">
      <h1 class="heading">CustomNgIf Pipe</h1>
    </div>

    <div class="card p-3 mb-4">
      <div>
        <button class="btn btn-success" (click)="toggle()">
          Toggle Content
        </button>
        <div *appCustomIf="showContent" class="mt-3">
          <h3>This content is conditionally shown.</h3>
          <h6>This content is conditionally shown.</h6>
          <pre>This content is conditionally shown.</pre>
          <small>This content is conditionally shown.</small>
        </div>
      </div>
    </div>
  `,
})
export class AppCustomNgIfComponent {
  showContent = true;

  toggle() {
    this.showContent = !this.showContent;
  }
}
