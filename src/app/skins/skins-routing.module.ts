import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { OutfitComponent} from "./outfit/outfit.component";
import { BackblingComponent} from "./Back Bling/backbling.component";
import { ContrailComponent} from "./Contrail/contrail.component";
import {HarvestingToolComponent} from "./Harvesting Tool/harvestingtool.component";
import {GliderComponent} from "./Glider/glider.component";
import {LoadingScreenComponent} from "./Loading Screen/loadingscreen.component";



@NgModule({
  imports: [RouterModule.forChild([
    { path: 'outfit', component: OutfitComponent},
    { path: 'backbling', component: BackblingComponent},
    { path: 'contrail', component: ContrailComponent},
    { path: 'harvestingtool', component: HarvestingToolComponent},
    { path: 'glider', component: GliderComponent},
    { path: 'loadingscreen', component: LoadingScreenComponent}
  ])],
  exports: [RouterModule]
})
export class SkinsRoutingModule { }
