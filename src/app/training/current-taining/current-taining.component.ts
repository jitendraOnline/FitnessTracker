import { Component, OnInit } from '@angular/core';
import { UIService } from 'src/app/shared/ui.service';

@Component({
  selector: 'app-current-taining',
  templateUrl: './current-taining.component.html',
  styleUrls: ['./current-taining.component.scss']
})
export class CurrentTainingComponent implements OnInit {

  constructor(private uiSerice:UIService) { }

  isloading:boolean;
  ngOnInit() {
  this.uiSerice.loadingStateChanged.subscribe((data:boolean)=>{
  this.isloading=data;
  })
  }

}
