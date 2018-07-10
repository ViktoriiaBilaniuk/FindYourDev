import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import {LoginComponent} from './components/login/login.component';


export const AUTH_ROUTES = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(AUTH_ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class AuthRoutingModule {}
