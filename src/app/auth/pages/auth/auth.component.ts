import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  public login: string;
  public password: string;
  public logged: boolean;
  public isShow: boolean = false;

  constructor(public loginService: LoginService, private router: Router ) {
  }

  public ngOnInit(): void { }

  public onLogin() {
    if (this.login && this.password) {
      this.logged = true;
      this.loginService.auth(this.login, this.password, this.logged);
      if (this.login === 'admin') {
        this.router.navigate(['admin']);
      } else {
        this.router.navigate(['main']);
      }
    } else {
      this.isShow = true;
    }
   }

}