import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth-service.service';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import {MatSnackBar} from '@angular/material';
import { UIService } from 'src/app/shared/ui.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthService,public snackBar: MatSnackBar,private uiService:UIService) { }
isloading:boolean=false;



  ngOnInit( ) {
    this.authService.errorMessage.subscribe((error)=>{ 
      this.snackBar.open(error['message'], "action", {
        duration: 3000,
      });
    })
  }

  onSubmit(from){
    this.uiService.loadingStateChanged.subscribe((loadingstate)=>{
      this.isloading=loadingstate;
    })

    console.log(from);
    this.authService.login(
      {
        email:from.value.email,
        password:from.value.password
      }
    );
    }

  
  



}
