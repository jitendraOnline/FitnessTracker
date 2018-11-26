import { Component, OnInit, EventEmitter,Output } from '@angular/core';
import { TestSeriesService } from '../test-series.service';
import { UIService } from 'src/app/shared/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.scss']
})
export class NewTrainingComponent implements OnInit {

  @Output('test') test= new EventEmitter();
k:Subscription;
  constructor(private testSeriesServises:TestSeriesService,private uiSerice:UIService) { }
  isloading:boolean=false;
  ngOnInit() {
  }

  onSubmit(ok){
    console.log(ok);
   this.test.emit(ok);
   this.testSeriesServises.addNewTestSeries(ok.value);
  this.k= this.uiSerice.loadingStateChanged.subscribe((data:boolean)=>{
    this.isloading=data;
    })
  }


  ngOnDestroy(){
    if(this.k){
    this.k.unsubscribe();
  }
  }


 
}
