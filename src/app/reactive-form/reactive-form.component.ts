import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  reactiveForm: FormGroup;
  // nameError: string;
  // userNameError: string;

  formErrors = {
    name: '',
    username: ''
  };
  validationMessages = {
    name: {
      required: 'Name is Required',
      minLength: 'name must be at least 3 characters',
      maxLength: 'name must be 6 characters MAX'
    },
    username: {
      required: 'userName is Required',
      minLength: 'userName must be at least 5 characters',
      maxLength: 'userName must be 7 characters MAX'
    },
  };

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    // build the data model for our form
    this.buildForm();
  }


  buildForm() {
    // build our form
    this.reactiveForm = this.fb.group({
      name: ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(6)
      ]],
      username: ['', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(7),
      ]],
      addresses: this.fb.array([
        this.fb.group({
          city: [''],
          country: ['']
        })
      ])
    });
    // watch for changes and validate
    this.reactiveForm.valueChanges.subscribe(data => {
      this.validateForm();
    });
    console.log(this.reactiveForm);
  }

  validateForm() {
    for (const field in this.formErrors) {
      // clear that input field errors

      this.formErrors[field] = '';

      // grab an input field by name

      const input = this.reactiveForm.get(field);

      if (input.invalid && input.dirty) {
        // figure out the type of errors
        // loop over the formErrors field names
        console.log(input);
        for (const error in input.errors) {
          this.formErrors[field] = this.validationMessages[field][error];
        }
        // assign that type of error message to a var

      }
    }

    // this.nameError = '';
    // this.userNameError = '';
    //
    // // validate each field
    // const name = this.reactiveForm.get('name');
    // const username = this.reactiveForm.get('username');
    //
    // if (name.invalid && name.dirty) {
    //   if (name.errors.required) {
    //     this.nameError = 'Name is Required';
    //   }
    //   if (name.errors.minLength) {
    //     this.nameError = 'name must be at least 3 characters';
    //   }
    //   if (name.errors.maxLength) {
    //     this.nameError = 'name must be at least 5 characters MAX';
    //   }
    // }
    //
    // if (username.invalid && username.dirty) {
    //   if (username.errors.required) {
    //     this.userNameError = 'Name is Required';
    //   }
    //   if (username.errors.minLength) {
    //     this.userNameError = 'name must be at least 3 characters';
    //   }
    //   if (username.errors.maxLength) {
    //     this.userNameError = 'name must be at least 5 characters MAX';
    //   }
    // }
  }

  get name() {
    return this.reactiveForm.get('name');
  }

  get username() {
    return this.reactiveForm.get('username');
  }

  processForm() {
    console.log('form', this.reactiveForm.value);
  }
}
