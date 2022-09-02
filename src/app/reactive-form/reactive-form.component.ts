import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],

})

export class ReactiveFormComponent implements OnInit {

  signIn: FormGroup;
  skills:FormArray
 

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {

    this.signIn = this.fb.group({
      personalDetails : new FormGroup({  //to group form controls we genereate form group in the name of personaldetails
        username: new FormControl(null,[Validators.required]),
        email: new FormControl(null,[Validators.required,Validators.email],this.emailNotAllowed),
        phone: new FormControl(null,Validators.required),
      }),
      pass: new FormControl(null,Validators.required),
      cpass: new FormControl(null,Validators.required),
      check:new FormControl(null,Validators.required),
      //formarray
      skills: new FormArray([
        new FormControl(null,Validators.required)
      ])
    })
    this.skills=this.signIn.get('skills') as FormArray
    

    //setvalue function
/*setTimeout(() => {
    this.signIn.setValue({
      personalDetails:{
        username:'Aneesha M S',
        email:'',
        phone:''
      },
      pass:'',
      cpass:'',
      check:true,
      skills:''
    })
  }, 3000);*/

  //patchvalue method
  //in patchvalue function only required formcontrol to be include not need to include all fields
  /*setTimeout(()=>{
this.signIn.patchValue({
  personalDetails:{
    email:'aqwe@gmail.com'
  }
})
  },3000)*/


    //statuschange => formcontrol

   /* this.signIn.get('personalDetails.email').statusChanges.subscribe((value)=>{
      console.log(value)
    })*/

    //=>formgroup
    this.signIn.statusChanges.subscribe((value)=>{
      console.log(value)
    })

    
//value changes
//valuechanges on formcontrol

/*this.signIn.get('personalDetails.username').valueChanges.subscribe((value)=>{
  console.log(value)
})*/

//valuchange on formgroup

/*this.signIn.valueChanges.subscribe((value)=>{
  console.log(value)
})*/
  }

  onSubmit(){
    console.log(this.signIn)
  }

  Update(){
    this.signIn.patchValue({
     personalDetails:{
      username:'abcd'
     }
    })
  }


  
  addSkills(){

    // <formarray> cast the get element to array becoz the get can return anything like formgroup or control 
    // so we need to specify that it is formarray
(<FormArray>this.signIn.get('skills')).push(new FormControl(null,Validators.required))
  }



  // nonSpaceAllowed(control:FormControl){
    //formcontrolnte element null allathe athinte valueil space udengil allow chyilla ennullathinte method
  /*  if(control.value != null && control.value.indexOf(' ')!=-1){
      return {nonSpaceAllowed:true}
  }
return null
}*/


// 1. async validator
//2.abcd@gmail.com => ingne oru email vannal athu accept chyilla
// 3. 5sec vare email check chythitt abcd@gmail.com => ee email allengil valid aakum allengil invalid aakum
// 4. async validator use chyanel promise allel observable use chyyanam
emailNotAllowed(control:FormControl) : Promise<any> | Observable<any> {
  const response = new Promise((resolve,reject)=>{
    setTimeout(()=>{
      if(control.value==='abcd@gmail.com'){
      resolve({emailNotAllowed:true})
      }
      else{
        resolve (null)
      }
    },5000)

  })
return response
}



}
