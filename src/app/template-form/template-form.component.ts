import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
user={
  username:'',
  email:'',
  phone:'',
  pass:'',
  cpass:'',
  check:false
}
 
   


  constructor() { }

  ngOnInit(): void {
  
  }

  submitForm(formValue:NgForm){
    console.log(formValue.value);    
  }

}
