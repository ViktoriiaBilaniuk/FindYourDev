import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from './guards/auth/auth.guard';
import { LoggedUserGuard } from './guards/auth/logged-user.guard';
import { FacebookService } from './services/facebook.service';
import { LinkedinService } from './services/linkedin.service';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [
    AuthGuard,
    LoggedUserGuard,
    FacebookService,
    LinkedinService
  ]
})

export class CoreModule {}
