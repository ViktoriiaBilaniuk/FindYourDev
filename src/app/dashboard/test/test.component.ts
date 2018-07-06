import { Component, OnInit } from '@angular/core';
import {LinkedinService} from '../../core/services/linkedin.service';
import {AuthService, FacebookLoginProvider, GoogleLoginProvider} from 'angular5-social-login';

@Component({
  selector: 'fyd-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor(
    private linkedinService: LinkedinService, private socialAuthService: AuthService
  ) { }

  ngOnInit() {
/*    this.linkedinService.authorization()
      .subscribe(data => {
        console.log(data);
      });*/
    /*this.linkedinService.getUsers()
      .subscribe(data => {
        console.log(data);
      });*/
  }


  public socialSignIn(socialPlatform: string) {
    let socialPlatformProvider;
    if (socialPlatform === 'facebook') {
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    } else if (socialPlatform === 'google') {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }

    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform+" sign in data : " , userData);
        // Now sign-in with userData
      }
    );
  }

}
