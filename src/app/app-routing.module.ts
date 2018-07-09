import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';


const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {path: '**', redirectTo: 'login'},
  {path: '', pathMatch: 'full', redirectTo: 'login'}

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule {}
