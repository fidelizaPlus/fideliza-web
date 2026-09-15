import type { AbstractControl, ValidationErrors } from '@angular/forms';
import { cnpj } from 'cpf-cnpj-validator';

export function cnpjValidator(control: AbstractControl): ValidationErrors | null {
  const value: unknown = control.value;

  if (value === null || value === undefined || value === '') return null;

  return typeof value === 'string' && cnpj.isValid(value) ? null : { invalidCnpj: true };
}
