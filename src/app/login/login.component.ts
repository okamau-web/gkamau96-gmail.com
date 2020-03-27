import { Login, Logout } from './../store/actions/auth.actions';
import { tap, timeout } from 'rxjs/operators';
import { AuthState } from './../store/reducer/auth.reducer';
import { Store } from '@ngrx/store';
import { LogUser } from './../model/login-user';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {noop} from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUserData: LogUser = {
    username: '',
    email: '',
    password: ''
  };

  constructor(private auth: AuthService, private route: Router,  private store: Store<AuthState>) {}

  ngOnInit() {}

  loginUser() {

    this.auth.loginUser(this.loginUserData)
      .pipe(
        tap(user => {
          console.log(user);
          localStorage.setItem('token', user['user']);
          this.store.dispatch(new Login({user}));

          this.route.navigateByUrl('/map');

        })
      ).subscribe(
        noop,
        () => alert( 'Username or Password is incorrect')
      );


  }

  LogoutUser(){

     this.store.dispatch(new Logout());


  }
}
