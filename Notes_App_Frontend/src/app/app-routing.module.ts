import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
// import { ViewNotesComponent } from './view-notes/view-notes.component';
// import { AddNotesComponent } from './add-notes/add-notes.component';
import { CreateNoteComponent } from './create-note/create-note.component';
import { ListNotesComponent } from './list-notes/list-notes.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
 
  {
    path: 'createnotes',
    component: CreateNoteComponent
  },
  {
    path: 'listnotes',
    component: ListNotesComponent
  },
  {
    path: '**', // Catch-all route, should be defined last
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
