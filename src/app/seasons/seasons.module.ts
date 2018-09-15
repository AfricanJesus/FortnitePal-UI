import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {SeasonsRoutingModule} from "./seasons-routing.module";
import {Season1Component} from "./season1/season1.component";
import {Season2Component} from "./season2/season2.component";
import {Season3Component} from "./season3/season3.component";
import {Season4Component} from "./season4/season4.component";
import {Season5Component} from "./season5/season5.component";
import {ItemseasonComponent} from "../shared/components/itemseason.component";
import {RouterModule} from "@angular/router";





// *******************************************************************************
//

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    RouterModule,

    SeasonsRoutingModule
  ],
  declarations: [
    Season1Component,
    Season2Component,
    Season3Component,
    Season4Component,
    Season5Component,
    ItemseasonComponent
  ]
})
export class SeasonsModule { }
