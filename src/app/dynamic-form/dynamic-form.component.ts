import { Component, inject, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  IForm,
  IFormControl,
  IValidators,
} from '../../interfaces/form.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.scss',
})
export class DynamicFormComponent implements OnInit {
  @Input() formData!: IForm;
  fb = inject(FormBuilder);
  registrationForm = this.fb.group({});

  ngOnInit() {
    if (this.formData?.formControls) {
      let formGroup: any = {};
      this.formData.formControls.forEach((controls: IFormControl) => {
        let controlValidators: any = [];
        if (controls.validators) {
          controls.validators.forEach((val: IValidators) => {
            if (val.required) controlValidators.push(Validators.required);
            if (val.minlength)
              controlValidators.push(Validators.minLength(val.minlength));
            if (val.maxlength)
              controlValidators.push(Validators.maxLength(val.maxlength));
            if (val.pattern)
              controlValidators.push(Validators.pattern(val.pattern));
            if (val.email) controlValidators.push(Validators.email);
          });
        }
        formGroup[controls.name] = [controls.value || '', controlValidators];
      });
      this.registrationForm = this.fb.group(formGroup);
    }
  }

  onSubmit() {
    console.log(this.registrationForm);
  }

  onReset() {
    this.registrationForm.reset();
  }

  getValidationErrors(control: IFormControl): string {
    const myFormControl = this.registrationForm.get(control.name);
    let errorMessage = '';

    control.validators.forEach((val) => {
      if (myFormControl?.hasError(val.validatorName)) {
        errorMessage = val.message;
      }
    });
    return errorMessage;
  }
}
