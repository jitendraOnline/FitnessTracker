import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth-service.service';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import {MatSnackBar} from '@angular/material';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  invalidCredentials :boolean;
  errorMessage:String;
  constructor(private authService:AuthService,public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.authService.errorMessage.subscribe((error)=>{
      this.snackBar.open(error['message'], "dismiss", {
        duration: 3000,
      });
    })
    }
  

  onSubmit(from){
    if(from.value.password!=from.value.cpassword){
      this.snackBar.open("Password does not match", "dismiss", {
        duration: 3000,
      });
    }
else{
    this.authService.registerUser({
      email:from.value.email,
      password:from.value.password
    });
  }
}

}
