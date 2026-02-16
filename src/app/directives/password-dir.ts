import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appPasswordDir]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PasswordDir,
      multi: true
    }
  ]
})
export class PasswordDir implements Validator {

  validate(control: AbstractControl): ValidationErrors | null {

    const value = control.value;

    if (!value) return null;

    const regex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()\-+=])(?!.*\s).{8,}$/;

    const passwordValid = regex.test(value);

    return passwordValid ? null : { passwordInvalid: true };
  }
}
