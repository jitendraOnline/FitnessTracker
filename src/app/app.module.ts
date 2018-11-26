import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { WelcomeComponent } from './welcome/welcome.component';
import { HeadersComponent } from './navigation/headers/headers.component';
import { SideNavlistComponent } from './navigation/side-navlist/side-navlist.component';
import { AuthService } from './auth/auth-service.service';
import { TestSeriesService } from './training/test-series.service';
import { UIService } from './shared/ui.service';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HeadersComponent,
    SideNavlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    SharedModule,
    
    AuthModule
  ],
  providers: [AuthService,TestSeriesService,UIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
