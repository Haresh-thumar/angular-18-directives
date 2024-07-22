import { Component } from '@angular/core';
import { CustomNgForDirective } from '../../directives/structural/customNgFor.directive';

@Component({
  selector: 'app-CustomNgFor',
  standalone: true,
  imports: [CustomNgForDirective],
  template: `
    <!-------------- CustomNgFor Pipe ---------------->
    <div class="three">
      <h1 class="heading">CustomNgFor Pipe</h1>
    </div>

    <div class="card p-3 mb-4">
      <ul>
        <li *appCustomFor="let item of items; let i = index">
          {{ i }}: {{ item }}
        </li>
      </ul>
    </div>
  `,
})
export class AppCustomNgForComponent {
  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'];
}
