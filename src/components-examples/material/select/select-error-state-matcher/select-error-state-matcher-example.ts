import {Component} from '@angular/core';
import {UntypedFormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: UntypedFormControl | null,
    form: FormGroupDirective | NgForm | null,
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

/** @title Select with a custom ErrorStateMatcher */
@Component({
  selector: 'select-error-state-matcher-example',
  templateUrl: 'select-error-state-matcher-example.html',
})
export class SelectErrorStateMatcherExample {
  selected = new UntypedFormControl('valid', [Validators.required, Validators.pattern('valid')]);

  selectFormControl = new UntypedFormControl('valid', [
    Validators.required,
    Validators.pattern('valid'),
  ]);

  nativeSelectFormControl = new UntypedFormControl('valid', [
    Validators.required,
    Validators.pattern('valid'),
  ]);

  matcher = new MyErrorStateMatcher();
}
