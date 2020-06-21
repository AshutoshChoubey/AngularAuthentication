import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
{
  path: '',
  component: AuthComponent,
  children: [
    {
      path: '',
      component: SignupComponent,
      pathMatch: 'full'
    },
  ]
},
{
  path: 'login',
  component: AuthComponent,
  children: [
    {
      path: '',
      component: LoginComponent,
      pathMatch: 'full'
    },
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
