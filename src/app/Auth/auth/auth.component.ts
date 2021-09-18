import { HttpErrorResponse } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthResponseData, AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  isloggedin = true;
  isLoading = false;
  promptEvent:any;
  error:String = null;
  constructor(private authservice:AuthService,private router:Router) {
  }

  ngOnInit(): void {
  }

  switchmode(){
   this.isloggedin = !this.isloggedin;
  }
  onsubmit(form:NgForm){
    if(!form.valid){
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
    let authobs:Observable<AuthResponseData>
    this.isLoading = true
    if(this.isloggedin){
    authobs =  this.authservice.login(email,password)
    }
    else
  {
    authobs =  this.authservice.signup(email,password)
  }
  authobs.subscribe(res=>{
    console.log(res)
    this.isLoading = false
    this.router.navigate(['/recipes']);
  },
  messages=>{
    console.log(messages);
    this.error = messages
    this.isLoading = false
  }
  )
    console.log(form.value)
    form.reset();
}

onhandleerror(){
  this.error = null;
}

}
