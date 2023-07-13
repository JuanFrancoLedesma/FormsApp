import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from 'src/app/shared/service/validators.service';
import { EmailValidator } from 'src/app/shared/validators/email-validator.service';

@Component({
  templateUrl: './register-page.component.html',
})
export class RegisterPageComponent {
  public myForm: FormGroup = this.fb.group(
    {
      name: [
        '',
        [
          Validators.required,
          Validators.pattern(
            this.ValidatorsService.firstNameAndLastnamePattern
          ),
        ],
      ],
      // email: ['', [Validators.required, Validators.pattern(this.ValidatorsService.emailPattern)], [new EmailValidator()]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(this.ValidatorsService.emailPattern),
        ],
        [this.emailValidator],
      ],
      username: [
        '',
        [Validators.required, this.ValidatorsService.cantBeStrider],
      ],
      password: ['', [Validators.required, Validators.minLength(6)]],
      otherPassword: ['', [Validators.required]],
    },
    {
      validators: this.ValidatorsService.isFieldOneEqualFieldTwo(
        'password',
        'otherPassword'
      ),
    }
  );

  constructor(
    private fb: FormBuilder,
    private ValidatorsService: ValidatorsService,
    private emailValidator: EmailValidator
  ) {}

  isValidField(field: string) {
    return this.ValidatorsService.isValidField(this.myForm, field);
  }

  onSubmit() {}
}
