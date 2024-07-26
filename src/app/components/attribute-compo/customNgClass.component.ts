import { Component } from '@angular/core';
import { CustomClassDirective } from '../../directives/attribute/customNgClass.directive';

@Component({
  selector: 'app-CustomStyle',
  standalone: true,
  imports: [CustomClassDirective],
  template: `
    <!-------------- CustomNgFor Pipe ---------------->
    <div class="three">
      <h1 class="heading">CustomNgFor Pipe</h1>
    </div>

    <div class="card p-3 mb-4">
      <div
        [appCustomNgClass]="{
          'text-primary': isSuccess,
          'text-danger': isError
        }"
      >
        This text will have dynamic classes applied.
      </div>

      <div [appCustomNgClass]="dynamicClassesArray">
        This text will have classes from an array applied.
      </div>
    </div>
  `,
})
export class AppCustomNgClassComponent {
  isSuccess = true;
  isError = false;

  dynamicClassesArray = ['class1', 'class2'];
}
