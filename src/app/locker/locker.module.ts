import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// *******************************************************************************
//

import { LockerRoutingModule} from "./locker-routing.module";

// *******************************************************************************
// Libs


// *******************************************************************************
// Page components

import { OutfitComponent} from "./outfit/outfit.component";
import { BackblingComponent} from "./Back Bling/backbling.component";
import { ContrailComponent} from "./Contrail/contrail.component";
import {HarvestingToolComponent} from "./Harvesting Tool/harvestingtool.component";
import {GliderComponent} from "./Glider/glider.component";
import {LoadingScreenComponent} from "./Loading Screen/loadingscreen.component";


// *******************************************************************************
//

@NgModule({
  imports: [
    CommonModule,
    NgbModule,

    LockerRoutingModule
  ],
  declarations: [
    OutfitComponent,
    BackblingComponent,
    ContrailComponent,
    HarvestingToolComponent,
    GliderComponent,
    LoadingScreenComponent
  ]
})
export class LockerModule { }
