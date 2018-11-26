import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CurrentTainingComponent } from "./current-taining/current-taining.component";
import { TrainingComponent } from "./training.component";
import { PastTrainingComponent } from "./past-training/past-training.component";
import { SharedModule } from "../shared/shared.module";
import { NewTrainingComponent } from "./new-training/new-training.component";
import { TrainingRoutingModule } from "./training-routing.module";


@NgModule({
    declarations:[
        CurrentTainingComponent,
        TrainingComponent,
        PastTrainingComponent,
        CurrentTainingComponent,
        NewTrainingComponent
    ],
    imports:[
        CommonModule,
        SharedModule,
        TrainingRoutingModule
       

    ],
    exports:[],
})
export class TrainingModule{

}