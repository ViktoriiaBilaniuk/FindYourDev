import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class LoggedUserGuard implements CanActivate {
  constructor(
    private router: Router) {
  }

  canActivate() {
    const isAuthorized = false;

    if (isAuthorized) {
      this.router.navigate(['/dashboard']);
    }

    return !isAuthorized;
  }
}
