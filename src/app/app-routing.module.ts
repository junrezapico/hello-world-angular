import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/pages/login/login.component';
import { RegistrationComponent } from './components/pages/registration/registration.component';
import { TodoComponent } from './components/pages/todo/todo.component';
import { ProtectedRoutesGuard } from './services/protected-routes.guard';
import { UnprotectedRoutesGuard } from './services/unprotected-routes.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [UnprotectedRoutesGuard],
  },
  {
    path: 'register',
    component: RegistrationComponent,
    canActivate: [UnprotectedRoutesGuard],
  },
  {
    path: 'todo',
    component: TodoComponent,
    canActivate: [ProtectedRoutesGuard],
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
