import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    //this is good way to get form values when they aren't submitted 
  @ViewChild('f') signupForm: NgForm;
  defaultQuestion = 'pet';
  answer = '';

  
  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }


  onSubmit() {
    console.log(this.signupForm);
  }
}
