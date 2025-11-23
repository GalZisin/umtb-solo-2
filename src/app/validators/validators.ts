import { AbstractControl, ValidationErrors } from '@angular/forms';

export function israeliIdValidator(control: AbstractControl): ValidationErrors | null {
  const id = control.value;
  if (!id) return null;

  if (!/^\d{9}$/.test(id)) {
    return { invalidId: true };
  }

  const digits = id.split('').map(Number);
  let sum = 0;

  for (let i = 0; i < 8; i++) {
    let digit = digits[i] * ((i % 2) + 1);
    if (digit > 9) digit = Math.floor(digit / 10) + (digit % 10);
    sum += digit;
  }

  const checkDigit = (10 - (sum % 10)) % 10;
  return checkDigit === digits[8] ? null : { invalidId: true };
}

export function mobilePhoneValidator(control: AbstractControl): ValidationErrors | null {
  const phone = control.value;
  if (!phone) return null;

  if (!/^\d{10,}$/.test(phone)) {
    return { invalidPhone: true };
  }

  return null;
}

export function loanAmountValidator(min: number, max: number) {
  return (control: AbstractControl): ValidationErrors | null => {
    const amount = control.value;
    if (!amount) return null;

    const numAmount = Number(amount);
    if (isNaN(numAmount) || numAmount < min || numAmount > max) {
      return { invalidLoanAmount: { min, max } };
    }

    return null;
  };
}