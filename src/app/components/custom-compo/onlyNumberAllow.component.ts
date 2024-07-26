import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { OnlyNumberAllowDirective } from '../../directives/custom/onlyNumberAllow.directive';

@Component({
  selector: 'app-onlyNumberAllow',
  standalone: true,
  imports: [ReactiveFormsModule, OnlyNumberAllowDirective],
  template: `
    <div class="three">
      <h1 class="heading">Only Numeric Value Allow Directive</h1>
    </div>

    <div class="card p-3 mb-4">
      <form [formGroup]="form" (ngSubmit)="onSubmit()">
        <div class="mb-3">
          <input
            formControlName="alphaNumInput"
            [appOnlyNumberAllow]="12"
            class="form-control"
            placeholder="Enter Mobile No."
          />
        </div>
        <button type="submit" class="btn btn-primary" [disabled]="form.invalid">
          Submit
        </button>
      </form>
      <!-- Display current value -->
      <p>
        Mobile No.: <b>{{ form.controls['alphaNumInput'].value }}</b>
      </p>
    </div>
  `,
})
export class AppOnlyNumberAllowComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      alphaNumInput: [''],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('Form Submitted!', this.form.value);
    }
  }
}
