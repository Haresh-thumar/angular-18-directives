import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NumFloatLengthSetDirective } from '../../directives/custom/numFloatLengthSet.directive';

@Component({
  selector: 'app-appNumFloatLengthSet',
  standalone: true,
  imports: [ReactiveFormsModule, NumFloatLengthSetDirective],
  template: `
    <div class="three">
      <h1 class="heading">MaxLength Number with Decimal Directive</h1>
    </div>

    <div class="card p-3 mb-4">
      <form [formGroup]="form" (ngSubmit)="onSubmit()">
        <div class="mb-3">
          <input
            formControlName="alphaNumInput"
            [appNumFloatLengthSet]="12"
            [setFloatDigit]="2"
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
export class AppNumFloatLengthSetComponent {
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
