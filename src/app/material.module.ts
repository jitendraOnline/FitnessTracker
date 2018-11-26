import { NgModule } from "@angular/core";
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatDatepickerModule,MatNativeDateModule,MatCheckboxModule, MatSnackBarModule} from '@angular/material';
import {MatTabsModule} from '@angular/material/tabs';
import {MatRadioModule} from '@angular/material/radio';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@NgModule({

imports: [MatInputModule,
  MatButtonModule,
  MatCardModule,
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule,
  MatDatepickerModule,
  MatNativeDateModule,MatCheckboxModule,MatTabsModule,MatRadioModule,MatSnackBarModule,MatProgressSpinnerModule]
,

exports: [MatInputModule,
      MatButtonModule,
      MatCardModule,
      MatSidenavModule,
      MatToolbarModule,
      MatIconModule,
      MatListModule,
      MatDatepickerModule,
      MatNativeDateModule,MatCheckboxModule,MatTabsModule,MatRadioModule,MatSnackBarModule,MatProgressSpinnerModule]
  })
export class MaterialModule{

}