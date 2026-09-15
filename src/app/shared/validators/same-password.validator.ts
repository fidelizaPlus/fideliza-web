import { AbstractControl, ValidationErrors } from '@angular/forms';

export function samePasswordValidator(control: AbstractControl): ValidationErrors | null {
  const password: unknown = control.get('password')?.value;
  const confirmPassword: unknown = control.get('confirmPassword')?.value;

  if (password !== confirmPassword) return { passwordMismatch: true };

  return null;
}
