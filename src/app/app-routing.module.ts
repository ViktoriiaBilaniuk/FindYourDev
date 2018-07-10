import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoggedUserGuard } from './core/guards/auth/logged-user.guard';
import { AuthGuard } from './core/guards/auth/auth.guard';


const appRoutes: Routes = [
  {path: 'auth', canActivate: [ LoggedUserGuard ], loadChildren: './auth/auth.module#AuthModule' },
  {path: 'dashboard', canActivate: [ AuthGuard ], loadChildren: './dashboard/dashboard.module#DashboardModule'},
  {path: '**', redirectTo: 'dashboard'},
  {path: '', pathMatch: 'full', redirectTo: 'dashboard'}

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
