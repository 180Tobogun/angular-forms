import {Component, OnInit} from '@angular/core';

export class User {
  name: string;
  userName: string;
}

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  user: User;
  submitted = false; // check if the form is submitted

  ngOnInit() {
    this.user = {
      name: 'Froz1',
      userName: 'King'
    };
  }

  get diagnostic() {
    return JSON.stringify(this.user);
  }

  processForm() {
    console.log(this.user);
    this.submitted = true;
    console.log(this.submitted);

    // create user
    // this.service.createUser(this.user)...
  }

}
