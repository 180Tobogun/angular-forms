import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  reactiveForm: FormGroup;
  nameError: string;
  userNameError: string;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
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
    });
    // watch for changes and validate
    this.reactiveForm.valueChanges.subscribe(data => {
      console.log(data);

      this.nameError = '';
      this.userNameError = '';

      // validate each field
      const name = this.reactiveForm.get('name');
      const username = this.reactiveForm.get('username');

      if (name.invalid && name.dirty) {
        if (name.errors.required) {
          this.nameError = 'Name is Required';
        }
        if (name.errors.minLength) {
          this.nameError = 'name must be at least 3 characters';
        }
        if (name.errors.maxLength) {
          this.nameError = 'name must be at least 5 characters MAX';
        }
      }

      if (username.invalid && username.dirty) {
        if (username.errors.required) {
          this.userNameError = 'Name is Required';
        }
        if (username.errors.minLength) {
          this.userNameError = 'name must be at least 3 characters';
        }
        if (username.errors.maxLength) {
          this.userNameError = 'name must be at least 5 characters MAX';
        }
      }
    });

    console.log(this.reactiveForm);
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
