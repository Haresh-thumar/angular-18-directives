import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AlphabeticOnlyDirective } from '../../directives/custom/acceptAlphabetCharOnly.directive';

@Component({
  selector: 'app-acceptAlphabetCharOnly',
  standalone: true,
  imports: [ReactiveFormsModule, AlphabeticOnlyDirective],
  template: `
    <!-------------- Accept-Alphabet-Char-Only Directive ---------------->
    <div class="three">
      <h1 class="heading">Accept-Alphabet-Char-Only Directive</h1>
    </div>

    <div class="card p-3 mb-4">
      <!-- Reactive form -->
      <form [formGroup]="form" (ngSubmit)="onSubmit()">
        <div class="mb-3">
          <label for="alphabetInput" class="form-label"
            >Alphabetic Input:</label
          >
          <input
            id="alphabetInput"
            formControlName="alphabetInput"
            [acceptAlphabetCharOnly]="10"
            class="form-control"
            placeholder="Enter alphabetic characters only"
          />
        </div>
        <!-- Submit button -->
        <button type="submit" class="btn btn-primary" [disabled]="form.invalid">
          Submit
        </button>
      </form>
      <!-- Display current value -->
      <p>
        Current value: <b>{{ form.controls['alphabetInput'].value }}</b>
      </p>
    </div>
  `,
})
export class AppAcceptAlphabetCharOnlyComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      alphabetInput: [''],
    });
  }

  // Handle form submission
  onSubmit() {
    if (this.form.valid) {
      console.log('Form Submitted!', this.form.value);
    }
  }
}
