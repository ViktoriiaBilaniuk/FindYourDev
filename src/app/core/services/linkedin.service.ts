import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {RequestOptions} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class LinkedinService {
  linkedinEndpoint = environment.linkedinEndpoint;
  linkedinClientId = environment.linkedinClientId;

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(`${this.linkedinEndpoint}v1/people/~?format=json`);
  }

  authorization() {
    const requestOptions = new RequestOptions({ headers: null, withCredentials:
        true });

    return this.http.get(`${this.linkedinEndpoint}oauth/v2/authorization?response_type=code&client_id=${this.linkedinClientId}&redirect_uri=https%3A%2F%2Fwww.example.com%2Fauth%2Flinkedin&state=987654321&callback=foo`);
  }
}
