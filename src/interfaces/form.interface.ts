export interface IForm {
  formTitle: string;
  savebtnTitle: string;
  resetbtnTitle: string;
  formControls: IFormControl[];
}

export interface IFormControl {
  name: string;
  label: string;
  class: string;
  type: string;
  validators: IValidators[];
  placeholder?: string;
  options?: IOptions[];
  radioOptions?: string[];
  value?: string;
}

export interface IValidators {
  validatorName: string;
  message: string;
  required?: boolean;
  pattern?: string;
  minlength?: number;
  maxlength?: number;
  email?: string;
}

export interface IOptions {
  id: number;
  value: string;
}
