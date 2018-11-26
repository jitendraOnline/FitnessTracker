import { Injectable } from '@angular/core';
import { AuthData } from './auth-data.model';
import { User } from './user.model';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { UIService } from '../shared/ui.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuthed =new Subject<boolean>();
  errorMessage =new Subject<any>();
  private user:User;
  
  constructor(private router:Router,private angularFireAuth:AngularFireAuth,private uiService:UIService) { }

  login(authData:AuthData){
    if(localStorage.getItem("email")!=null){
      this.isAuthed.next(true);
      this.router.navigate(['/training']);
    }
    else{
    this.uiService.loadingStateChanged.next(true);
    this.angularFireAuth.auth.signInWithEmailAndPassword(authData.email,authData.password)
    .then((result)=>{
      console.log(result);
      this.isAuthed.next(true);
      this.router.navigate(['/training']);
      this.user={
        email:authData.email,
        userId:authData.email.substring(3)
      };
      localStorage.setItem("email",result.user.email);
      this.uiService.loadingStateChanged.next(false);
    })
    .catch((error)=> {
      console.log(error);
      this.errorMessage.next(error);
      this.uiService.loadingStateChanged.next(false);
    })
  }
  }

  registerUser(authData:AuthData){
    this.uiService.loadingStateChanged.next(true);
    this.angularFireAuth.auth.createUserWithEmailAndPassword(
      authData.email,authData.password)
      .then((result)=>{
        console.log(result);
        this.isAuthed.next(true);
        this.router.navigate(['/training']);
        this.user={
          email:authData.email,
          userId:authData.email.substring(3)
        };
        this.uiService.loadingStateChanged.next(false);
        localStorage.setItem('email',result.user.email);
      })
      .catch((error)=> {
        console.log(error);
        this.errorMessage.next(error);
        this.uiService.loadingStateChanged.next(false);
      })

  }

  loggedOut(){
    this.user=null;
    this.isAuthed.next(false);
    this.router.navigate(['/login']);
    localStorage.clear();
  }

  getUser(){
    return {...this.user};
  }

  isAuth(){
    if(localStorage.getItem('email')!=null){
      this.isAuthed.next(true);
      return true;
    }
   else{
     return false;
   }
  }

}
