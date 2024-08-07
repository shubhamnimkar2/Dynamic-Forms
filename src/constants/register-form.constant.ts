import { IForm } from '../interfaces/form.interface';

export const registerForm: IForm = {
  formTitle: 'Registeration Form',
  savebtnTitle: 'Register',
  resetbtnTitle: 'Reset',
  formControls: [
    {
      name: 'firstName',
      label: 'First Name',
      placeholder: '',
      value: '',
      class: 'col-md-6',
      type: 'text',
      validators: [
        {
          validatorName: 'required',
          required: true,
          message: '*First Name is required',
        },
      ],
    },
    {
      name: 'lastName',
      label: 'Last Name',
      placeholder: '',
      value: '',
      class: 'col-md-6',
      type: 'text',
      validators: [
        {
          validatorName: 'required',
          required: true,
          message: '*Last Name is required',
        },
        {
          validatorName: 'minlength',
          minlength: 5,
          message: '*Last Name should be 5 characters long',
        },
      ],
    },
    {
      name: 'email',
      label: 'Email',
      placeholder: '',
      value: '',
      class: 'col-md-4',
      type: 'email',
      validators: [
        {
          validatorName: 'required',
          required: true,
          message: '*Email is required',
        },
        {
          validatorName: 'email',
          email: 'email',
          message: '*Email is not valid',
        },
      ],
    },
    {
      name: 'mobile',
      label: 'Mobile',
      placeholder: '',
      value: '',
      class: 'col-md-4',
      type: 'number',
      validators: [
        {
          validatorName: 'required',
          required: true,
          message: '*Mobile is required',
        },
        {
          validatorName: 'maxlength',
          maxlength: 10,
          message: '*Phone number should me 10 digits',
        },
        {
          validatorName: 'minlength',
          minlength: 10,
          message: '*Phone number should me 10 digits',
        },
      ],
    },
    {
      name: 'weight',
      label: 'Weight',
      placeholder: 'Should be in kg',
      value: '',
      class: 'col-md-4',
      type: 'number',
      validators: [
        {
          validatorName: 'required',
          required: true,
          message: '*Weight is required',
        },
      ],
    },
    {
      name: 'heigth',
      label: 'Height',
      placeholder: 'Should be in feet',
      value: '',
      class: 'col-md-4',
      type: 'number',
      validators: [
        {
          validatorName: 'required',
          required: true,
          message: '*Height is required',
        },
      ],
    },
    {
      name: 'gender',
      label: 'Gender',
      placeholder: '',
      value: '',
      class: 'col-md-4',
      radioOptions: ['Male', 'Female'],
      type: 'radio',
      validators: [
        {
          validatorName: 'required',
          required: true,
          message: '*Selection is required',
        },
      ],
    },
    {
      name: 'trainer',
      label: 'Trainer',
      placeholder: '',
      value: '',
      class: 'col-md-4',
      radioOptions: ['Yes', 'No'],
      type: 'radio',
      validators: [
        {
          validatorName: 'required',
          required: true,
          message: '*Selection is required',
        },
      ],
    },
    {
      name: 'package',
      label: 'Package',
      placeholder: '',
      value: '',
      class: 'col-md-4',
      options: [
        {
          id: 1,
          value: 'Monthly',
        },
        {
          id: 2,
          value: 'Quarterly',
        },
        {
          id: 3,
          value: 'Half Yearly',
        },
        {
          id: 4,
          value: 'Yearly',
        },
      ],
      type: 'select',
      validators: [
        {
          validatorName: 'required',
          required: true,
          message: '*Selection is required',
        },
      ],
    },
    {
      name: 'motivation',
      label: 'What motivates you?',
      placeholder: '',
      value: '',
      class: 'col-md-4',
      options: [
        {
          id: 1,
          value: 'Get Fit',
        },
        {
          id: 2,
          value: 'Gain more muscle',
        },
        {
          id: 3,
          value: 'Weight loss',
        },
        {
          id: 4,
          value: 'Be in a good shape',
        },
      ],
      type: 'select',
      validators: [
        {
          validatorName: 'required',
          required: true,
          message: '*Selection is required',
        },
      ],
    },
    {
      name: 'enquiryDate',
      label: 'Date of enquiry',
      placeholder: '',
      value: '',
      class: 'col-md-4',
      type: 'date',
      validators: [
        {
          validatorName: 'required',
          required: true,
          message: '*Date is required',
        },
      ],
    },
  ],
};
