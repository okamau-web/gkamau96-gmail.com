import { LogUser } from './model/login-user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private registerUrl = 'http://localhost:3000/api/register';

  private loginUrl = 'http://localhost:3000/api/login';

  constructor(private http: HttpClient, private router: Router) {}

  registerUser(user) {
    return this.http.post(this.registerUrl, user);
  }

  loginUser(user): Observable<any>  {
  return this.http.post(this.loginUrl, user);

  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }



  logoutUser() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  getToken() {
    return localStorage.getItem('token');
  }


}
