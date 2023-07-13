import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './switches-page.component.html',
})
export class SwitchesPageComponent {
  public myForm: FormGroup = this.fb.group({
    gender: ['M', Validators.required],
    wantNotifications: [true, Validators.required],
    termAndConditions: [false, Validators.requiredTrue]
  })

  constructor(private fb: FormBuilder){}

  isValidFiled(field: string): boolean | null {
    return (
      this.myForm.controls[field].errors && this.myForm.controls[field].touched
    );
  }

  //ngSubmit
  onSave(){

    if(this.myForm.invalid){
      this.myForm.markAllAsTouched();
      return;
    }
  }
}
