import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  signUp:FormGroup;
  isFormSubmitted = false

  // Patterns
 PAT_NAME = "^[a-zA-Z ]{2,20}$";
PAT_EMAIL = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.][a-zA-Z]{2,4}$";

  constructor( private fb:FormBuilder) { }

  ngOnInit(): void {
    this.signUp=this.fb.group({
      'username':new FormControl(null,[Validators.required,Validators.pattern(this.PAT_NAME)]),
      'email':new FormControl(null,[Validators.required, Validators.email, Validators.pattern(this.PAT_EMAIL)]),
      'phone':new FormControl(null,Validators.required),
      'pass':new FormControl(null,Validators.required),
      'cpass':new FormControl(null,Validators.required),
      'check':new FormControl(null,Validators.required),
    })
  }

  onSignUp(){
    this.isFormSubmitted=true;
    console.log(this.signUp)
  }


  // onSignUp(){
  //   if(this.signUp.invalid)
  //     return false
    
  //   else
  //     console.log(this.signUp)
  // }

}
