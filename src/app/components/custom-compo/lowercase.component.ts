import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { LowercaseInputDirective } from '../../directives/custom/lowercase.directive';

@Component({
  selector: 'app-lowercase',
  standalone: true,
  imports: [ReactiveFormsModule, LowercaseInputDirective, JsonPipe],
  template: `
    <div class="container">
      <div class="three">
        <h1 class="heading">Lowercase Directive</h1>
      </div>
      <form [formGroup]="form" (ngSubmit)="onSubmit()">
        <div class="mb-3">
          <label for="username" class="form-label">Username:</label>
          <input
            id="username"
            formControlName="username"
            class="form-control"
            placeholder="Enter your username"
            appToLowercase
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
export class appToLowercaseComponent {
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
