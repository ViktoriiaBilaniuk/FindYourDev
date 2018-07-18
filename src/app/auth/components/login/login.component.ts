import {Component, OnDestroy, OnInit} from '@angular/core';
import {
  AuthService,
  FacebookLoginProvider,
  GoogleLoginProvider,
  LinkedinLoginProvider,
  SocialUser,
} from 'ng4-social-login';
import {fadeInAnimation} from '../../../shared/components/animations/animations.component';

@Component({
  selector: 'fyd-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [fadeInAnimation],
})
export class LoginComponent implements OnInit, OnDestroy {

  public user: SocialUser;
  private loggedIn: boolean;

  constructor(
    private authService: AuthService) {
  }

  ngOnInit( ) {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signInWithLinkedIN(): void {
    this.authService.signIn(LinkedinLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
  }

  ngOnDestroy() {

  }

}
