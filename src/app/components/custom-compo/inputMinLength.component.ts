import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { JsonPipe, NgClass } from '@angular/common';
import { InputMinLengthDirective } from '../../directives/custom/inputMinLength.directive';

@Component({
  selector: 'app-inputMinLength',
  standalone: true,
  imports: [ReactiveFormsModule, InputMinLengthDirective, JsonPipe, NgClass],
  template: `
    <div class="container">
      <div class="three">
        <h1 class="heading">Input MinLength Directive</h1>
      </div>

      <form [formGroup]="form" (ngSubmit)="onSubmit()">
        <div class="mb-3">
          <label for="username" class="form-label">Username:</label>
          <input
            id="username"
            formControlName="username"
            class="form-control"
            placeholder="Enter your username"
            [appMinLength]="5"
            [ngClass]="{
              'is-invalid':
                form.get('username')?.invalid && form.get('username')?.touched
            }"
          />

          @if(form.get('username')?.errors?.['appMinLength']){
          <div class="invalid-feedback">please enter minimum 5 character</div>
          }
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>

      <div class="mt-3">
        <h3>Form Value:</h3>
        <pre>{{ form.value | json }}</pre>
      </div>
    </div>
  `,
  styles: [
    `
      .is-invalid {
        border-color: #dc3545;
      }
      .invalid-feedback {
        color: #dc3545;
      }
    `,
  ],
})
export class AppInputMinLengthComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      username: ['', [Validators.required]],
    });
  }

  onSubmit() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      console.log('Form Submitted:', this.form.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
