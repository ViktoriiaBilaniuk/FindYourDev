import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TestComponent } from './dashboard/test/test.component';
import { LinkedinService } from './core/services/linkedin.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormBuilder, FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './auth/components/login/login.component';
import {AppRoutingModule} from './app-routing.module';
import {environment} from '../environments/environment';
import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider,
  LinkedinLoginProvider
} from 'ng4-social-login';


const facebookClientId = environment.facebookClientId;
const googleClientId = environment.googleClientId;
const linkedinClientId = environment.linkedinClientId;

const CONFIG = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider(googleClientId)
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider(facebookClientId)
  },
  {
    id: LinkedinLoginProvider.PROVIDER_ID,
    provider: new LinkedinLoginProvider(linkedinClientId)
  }
], false);

export function provideConfig() {
  return CONFIG;
}


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    SocialLoginModule,
  ],
  providers: [
    LinkedinService,
    HttpClient,
    FormBuilder,
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }

