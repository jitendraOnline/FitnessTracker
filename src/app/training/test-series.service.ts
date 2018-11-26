import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { TestSeries } from './testSeries.model';
import { UIService } from '../shared/ui.service';


@Injectable({
  providedIn: 'root'
})
export class TestSeriesService {
  private testSeriesList:TestSeries;
  constructor(private db:AngularFirestore,private uiService:UIService) { 

  }

  getAllTestSeries(){
    console.log("i am called");
    this.uiService.loadingStateChanged.next(true);
    return this.db.collection('availableTest').snapshotChanges()
    .pipe(map(decArry=>{
     return decArry.map((doc)=>
         {
           let obj={
          TestId:doc.payload.doc.id,
          TestSeriesName:doc.payload.doc.data()['TestSeriesName'],
          Description:doc.payload.doc.data()['Description'],
          noOfTest:doc.payload.doc.data()['noOfTest'],
          typeOftest:doc.payload.doc.data()['typeOftest']
        };
      return obj;}
      )
      }
    ))
  }

  getAllTestQestion(){
    this.uiService.loadingStateChanged.next(true);
    return this.db.collection('availableTest').snapshotChanges()
 
     
    
  }


  addNewTestSeries(addtestSeriesList:TestSeries){
    this.uiService.loadingStateChanged.next(true);
    this.db.collection('availableTest').add(addtestSeriesList).then(()=>{
      this.uiService.loadingStateChanged.next(false);
    }
      
    )
  } 

}
