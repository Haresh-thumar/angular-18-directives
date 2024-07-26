import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AlphaNumSpaceTrimDirective } from '../../directives/custom/alphanumericSpaceTrim.directive';

@Component({
  selector: 'app-alphaNumSpaceTrim',
  standalone: true,
  imports: [ReactiveFormsModule, AlphaNumSpaceTrimDirective],
  template: `
    <div class="three">
      <h1 class="heading">AlphaNumSpaceTrim Directive</h1>
    </div>

    <div class="card p-3 mb-4">
      <form [formGroup]="form" (ngSubmit)="onSubmit()">
        <div class="mb-3">
          <input
            formControlName="alphaNumInput"
            [appAlphaNumSpaceTrim]="15"
            class="form-control"
            placeholder="Enter alphanumeric characters only"
          />
        </div>
        <button type="submit" class="btn btn-primary" [disabled]="form.invalid">
          Submit
        </button>
      </form>
      <!-- Display current value -->
      <p>
        Current value: <b>{{ form.controls['alphaNumInput'].value }}</b>
      </p>
    </div>
  `,
})
export class AppAlphaNumSpaceTrimComponent {
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
