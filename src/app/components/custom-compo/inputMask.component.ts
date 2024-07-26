import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputMaskDirective } from '../../directives/custom/inputMask.directive';

@Component({
  selector: 'app-inputMask',
  standalone: true,
  imports: [FormsModule, InputMaskDirective],
  template: `
    <div class="container">
      <div class="three">
        <h1 class="heading">Input Mask Directive</h1>
      </div>
      <form>
        <div class="mb-3">
          <label for="phone" class="form-label">Phone Number:</label>
          <input
            id="phone"
            name="phone"
            class="form-control"
            placeholder="(XX) XXX-XXX-XXXX"
            [(ngModel)]="phoneNumber"
            appInputMask="(00) 000-000-0000"
          />
        </div>
      </form>

      <div class="mt-3">
        <h3>Masked Value:</h3>
        <p>{{ phoneNumber }}</p>
      </div>
    </div>
  `,
  styles: [
    `
      .container {
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
      }
      .form-label {
        font-weight: bold;
      }
    `,
  ],
})
export class AppInputMaskComponent {
  phoneNumber: string = '';
}
