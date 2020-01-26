import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  form: FormGroup;
  nameError: string;
  userNameError: string;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    // this.form = new FormGroup({
    //   name: new FormControl(''),
    //   username: new FormControl('')
    // });

    // build our form

    this.form = this.fb.group({
      name: [''],
      username: ['']
    });

    // watch for changes and validate
    this.form.valueChanges.subscribe(data => {
      console.log(data);
      // validate each field

      const name = this.form.get('name');
      const username = this.form.get('username');

      if (name.invalid && name.dirty) {
        this.nameError = 'Name is Required';
      }

      if (username.invalid && username.dirty) {
        this.userNameError = 'userName is Required';
      }
    });

    console.log(this.form);
  }

  processForm() {
    console.log('form', this.form.value);
  }
}
