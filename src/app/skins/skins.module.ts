import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { OutfitComponent} from "./outfit/outfit.component";
import { BackblingComponent} from "./Back Bling/backbling.component";
import { ContrailComponent} from "./Contrail/contrail.component";
import {HarvestingToolComponent} from "./Harvesting Tool/harvestingtool.component";
import {GliderComponent} from "./Glider/glider.component";
import {LoadingScreenComponent} from "./Loading Screen/loadingscreen.component";
import {SkinsRoutingModule} from "./skins-routing.module";
import {SharedModule} from "../shared/shared.module";




@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    SkinsRoutingModule,
    SharedModule

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
export class SkinsModule {
}
