import { Component, OnInit, OnDestroy } from '@angular/core';
import { TestSeriesService } from './test-series.service';
import { UIService } from '../shared/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class TrainingComponent implements OnInit,OnDestroy{

  testDetails;
   isloading:boolean=false;
  constructor(private testSeriesService:TestSeriesService,private uiService:UIService) { }
k:Subscription;
  ngOnInit() {
   this.k= this.uiService.loadingStateChanged.subscribe((data:boolean)=>{
      this.isloading=data;
      console.log("inside the ngonit of parent "+this.isloading)
    });
    
  }

  log(event){
    console.log("this is new parent "+event);
    this.testDetails=event;
  }

  ngOnDestroy(){
    if(this.k){
      this.k.unsubscribe();
    }
   
  }

}
