import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { SharedModule } from '../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider,
  LinkedinLoginProvider
} from 'ng4-social-login';
import { environment } from '../../environments/environment';
import { AuthorizationService } from './services/auth.service';

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
  imports: [
    AuthRoutingModule,
    SharedModule,
    SocialLoginModule,
  ],
  exports: [],
  declarations: [
    LoginComponent,
  ],
  providers: [
    AuthorizationService,
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
})
export class AuthModule { }
