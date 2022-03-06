import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  handleLogin(){
    if(this.username==='aparna' && this.password==='dummy'){
      this.router.navigate(['welcome', this.username])
    }else{
      this.invalidLogin=true
    }
  }

}
