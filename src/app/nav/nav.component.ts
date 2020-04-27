import { LogUser } from './../model/login-user';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
 title = 'POPOTE SOLUTIONS';
user  =
  {username:'kamaa',
email:"kamau@kamaa"}
;
  constructor(public authService: AuthService, ) { }

  ngOnInit() { }

}
