import { Component, inject } from '@angular/core';
import { type AbstractControl, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { samePasswordValidator } from '../../../../shared/validators/same-password.validator';
import { cnpjValidator } from '../../../../shared/validators/cnpj.validator';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-register',
  styleUrl: './register.css',
  templateUrl: './register.html',
})
export class Register {
  private readonly fb = inject(FormBuilder);

  registerForm = this.fb.group(
    {
      establishmentName: [
        '',
        [
          (control: AbstractControl) => Validators.required(control),
          Validators.pattern(/^[a-zA-ZÀ-ÿ\s]+$/),
        ],
      ],
      email: [
        '',
        [
          (control: AbstractControl) => Validators.required(control),
          (email: AbstractControl) => Validators.email(email),
        ],
      ],
      cnpj: ['', [(control: AbstractControl) => Validators.required(control), cnpjValidator]],
      password: [
        '',
        [(control: AbstractControl) => Validators.required(control), Validators.minLength(6)],
      ],
      confirmPassword: [
        '',
        [(control: AbstractControl) => Validators.required(control), Validators.minLength(6)],
      ],
      terms: [false, [(control: AbstractControl) => Validators.requiredTrue(control)]],
    },
    {
      validators: [samePasswordValidator, (control: AbstractControl) => this.isString(control)],
    },
  );

  isString(control: AbstractControl) {
    const establishmentName: unknown = control.get('establishmentName')?.value;
    const email: unknown = control.get('email')?.value;
    const password: unknown = control.get('password')?.value;
    const confirmPassword: unknown = control.get('confirmPassword')?.value;

    if (
      typeof establishmentName !== 'string' ||
      typeof email !== 'string' ||
      typeof password !== 'string' ||
      typeof confirmPassword !== 'string'
    )
      return { invalidFieldType: true };

    return null;
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }
  }
}
