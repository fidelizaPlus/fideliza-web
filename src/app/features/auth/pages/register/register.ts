import { Component, inject } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { type AbstractControl, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { samePasswordValidator } from '../../../../shared/validators/same-password.validator';
import { cnpjValidator } from '../../../../shared/validators/cnpj.validator';
import {
  button,
  buttonSpan,
  checkboxIcon,
  checkboxWrapper,
  comeBackButton,
  errorIcon,
  errorText,
  formContainer,
  formFields,
  formInput,
  formSection,
  h1Text,
  h2TextPresentation,
  headerPresentation,
  legendText,
  main,
  presentationSection,
  pText,
  stepProgress,
  termsCheckbox,
  termsContainer,
  termsLink,
  termsRow,
  termsText,
} from './register.variants';

@Component({
  imports: [ReactiveFormsModule, InputTextModule, ButtonModule],
  selector: 'app-register',
  templateUrl: './register.html',
})
export class Register {
  private readonly fb = inject(FormBuilder);
  protected step = 1;

  protected readonly main = main;
  protected readonly presentationSection = presentationSection;
  protected readonly formSection = formSection;
  protected readonly formContainer = formContainer;
  protected readonly formInput = formInput;
  protected readonly formFields = formFields;
  protected readonly button = button;
  protected readonly buttonSpan = buttonSpan;
  protected readonly h1Text = h1Text;
  protected readonly pText = pText;
  protected readonly stepProgress = stepProgress;
  protected readonly legendText = legendText;
  protected readonly comeBackButton = comeBackButton;
  protected readonly termsContainer = termsContainer;
  protected readonly termsRow = termsRow;
  protected readonly checkboxWrapper = checkboxWrapper;
  protected readonly termsCheckbox = termsCheckbox;
  protected readonly checkboxIcon = checkboxIcon;
  protected readonly termsText = termsText;
  protected readonly termsLink = termsLink;
  protected readonly errorText = errorText;
  protected readonly errorIcon = errorIcon;
  protected readonly headerPresentation = headerPresentation;
  protected readonly h2TextPresentation = h2TextPresentation;

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
    const cnpj: unknown = control.get('cnpj')?.value;
    const password: unknown = control.get('password')?.value;
    const confirmPassword: unknown = control.get('confirmPassword')?.value;

    if (
      typeof establishmentName !== 'string' ||
      typeof email !== 'string' ||
      typeof cnpj !== 'string' ||
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

  onContinue() {
    const establishmentName = this.registerForm.controls.establishmentName;
    const email = this.registerForm.controls.email;
    const cnpj = this.registerForm.controls.cnpj;

    establishmentName.markAsTouched();
    email.markAsTouched();
    cnpj.markAsTouched();

    if (establishmentName.invalid || email.invalid || cnpj.invalid) return;

    this.step = 2;
  }

  onComeBack() {
    this.step = 1;
  }
}
