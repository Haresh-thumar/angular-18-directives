import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { InputTrimDirective } from '../../directives/custom/input-trim.directive';
import { JsonPipe, NgClass } from '@angular/common';

@Component({
  selector: 'app-inputTrim',
  standalone: true,
  imports: [ReactiveFormsModule, InputTrimDirective, JsonPipe, NgClass],
  template: `
    <div class="container">
      <h2>Input Trim Example</h2>
      <form [formGroup]="form" (ngSubmit)="onSubmit()">
        <div class="mb-3">
          <label for="username" class="form-label">Username:</label>
          <input
            id="username"
            formControlName="username"
            class="form-control"
            placeholder="Enter your username"
            appInputTrim
            [ngClass]="{
              'is-invalid':
                form.get('username')?.invalid && form.get('username')?.touched
            }"
          />
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
export class appInputTrimComponent {
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
    }
  }
}
