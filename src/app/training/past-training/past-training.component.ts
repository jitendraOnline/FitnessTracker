import { Component, OnInit, OnDestroy } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import { Observable, Subscription } from 'rxjs';
import { TestSeriesService } from '../test-series.service';
import { TestSeries } from '../testSeries.model';
import { UIService } from 'src/app/shared/ui.service';

@Component({
  selector: 'app-past-training',
  templateUrl: './past-training.component.html',
  styleUrls: ['./past-training.component.scss']
})
export class PastTrainingComponent implements OnInit,OnDestroy {
  isloading:boolean;
   PreviousTestSeries:TestSeries[];
  constructor(private db:AngularFirestore,private testSeriesServie:TestSeriesService,private uiService:UIService) { }
k:Subscription;
  ngOnInit() {
  this.k=  this.uiService.loadingStateChanged.subscribe((data:boolean)=>{
      this.isloading=data;
      console.log("i am inside of ngOnIt loading flag "+" "+this.isloading)
    });
   this.testSeriesServie.getAllTestQestion().subscribe((data)=>{
    //this.PreviousTestSeries= data;
    console.log(data);
    console.log(data[0].payload.doc.data());
    this.uiService.loadingStateChanged.next(false);
   });

   this.testSeriesServie.getAllTestSeries().subscribe((data)=>{
     this.PreviousTestSeries= data;
   })

   
  }

  ngOnDestroy(){
    if(this.k){
    this.k.unsubscribe();
    }
  }
}
