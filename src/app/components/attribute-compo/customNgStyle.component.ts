import { Component } from '@angular/core';
import { CustomNgStyleDirective } from '../../directives/attribute/customNgStyle.directive';

@Component({
  selector: 'app-CustomStyle',
  standalone: true,
  imports: [CustomNgStyleDirective],
  template: `
    <!-------------- CustomNgFor Pipe ---------------->
    <div class="three">
      <h1 class="heading">CustomNgFor Pipe</h1>
    </div>

    <div class="card p-3 mb-4">
      <div [appCustomNgStyle]="customStyles">
        This text will have custom styles applied.
      </div>
    </div>
  `,
})
export class AppCustomNgStyleComponent {
  customStyles = {
    color: 'blue',
    'font-size': '24px',
    'font-weight': 'bold',
  };
}
