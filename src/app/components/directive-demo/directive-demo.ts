import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Demoformdir } from '../../directives/demoformdir';
import { PasswordDir } from '../../directives/password-dir';

@Component({
  selector: 'app-directive-demo',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, Demoformdir, PasswordDir],
  templateUrl: './directive-demo.html',
})
export class DirectiveDemo {

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      fname: [null, Validators.required],
      lname: [null, Validators.required],
      email: [null, Validators.required],
      phone: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

submit() {

  if (this.form.invalid) {

    if (this.form.get('fname')?.errors) {
      alert('First Name is required');
      return;
    }

    if (this.form.get('phone')?.errors) {
      alert('Phone number is required');
      return;
    }

    if (this.form.get('password')?.hasError('required')) {
      alert('Password is required');
      return;
    }

    if (this.form.get('password')?.hasError('passwordInvalid')) {
      alert('Password must contain uppercase, lowercase, number, special character and 8+ length.');
      return;
    }
  }

  alert('Form submitted successfully!');
  console.log(this.form.value);
}


}
