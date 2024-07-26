import { Component } from '@angular/core';
import { DisableRightClickDirective } from '../../directives/custom/disableRightClick.directive';

@Component({
  selector: 'app-disableRightClick',
  standalone: true,
  imports: [DisableRightClickDirective],
  template: `
    <div class="container">
      <div class="three">
        <h1 class="heading">Disable Right-Click Directive</h1>
      </div>
      <p appDisableRightClick class="highlighted">
        Right-click is disabled on this paragraph. Try it!
      </p>
      <img
        appDisableRightClick
        src="http://surl.li/meuzfi"
        alt="Example Image"
        class="img-fluid"
      />
      <div class="alert alert-info mt-3">
        Right-click is disabled on this entire alert box as well.
      </div>
    </div>
  `,
  styles: [
    `
      .highlighted {
        padding: 10px;
        background-color: #f9f9f9;
        border: 1px solid #ddd;
        margin-bottom: 20px;
      }
    `,
  ],
})
export class appDisableRightClickComponent {}
