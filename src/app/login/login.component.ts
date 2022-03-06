import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'aparna'
  password = ''
  errorMessage = 'invalid login'
  invalidLogin = false

  constructor(private router: Router,
    public hardcodedauthentication: HardcodedAuthenticationService) { }

  ngOnInit(): void {
  }

  handleLogin(){
    if(this.hardcodedauthentication.authenticate(this.username, this.password)){
      this.router.navigate(['welcome', this.username])
    }else{
      this.invalidLogin=true
    }
  }

}
