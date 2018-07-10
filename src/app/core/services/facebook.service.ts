import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FacebookService {
  facebookToken = '';

  constructor(private http: HttpClient) { }

  getUsers() {
    // return this.http.get('https://graph.facebook.com/search?q=mark&type=user');
    return this.http.get(`https://graph.facebook.com/search?q=mark&type=user&access_token=${this.facebookToken}`);
  }
}
