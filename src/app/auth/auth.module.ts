import { NgModule } from "@angular/core";

import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AuthRoutingModule } from "./auth-routing.module";

@NgModule({
    declarations:[
        SignupComponent,
        LoginComponent,
    ],
    imports:[
        CommonModule,
        SharedModule,
        AngularFireAuthModule,
        AuthRoutingModule
    ],
    exports:[],
})

export class AuthModule{

}