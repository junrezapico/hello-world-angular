import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/pages/login/login.component';
import { TodoComponent } from './components/pages/todo/todo.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'todo', component: TodoComponent },
  { path: '',   redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }