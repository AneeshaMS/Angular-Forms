import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveComponent } from './reactive/reactive.component';


const routes: Routes = [
  {path:'template',component:TemplateFormComponent},
  {path:'reactive',component:ReactiveComponent},
  {path:'reactive-form',component:ReactiveFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
