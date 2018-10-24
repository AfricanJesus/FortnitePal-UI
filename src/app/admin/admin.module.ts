import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule as NgFormsModule, ReactiveFormsModule} from '@angular/forms';

import {AdminRoutingModule} from "./admin-routing.module";

import {SharedModule} from "../shared/interfaces/shared.module";
import {ItemlistComponent} from "./item/itemlist.component";
import {ItemeditComponent} from "./item/itemedit.component";
import {ItemviewComponent} from "./item/itemview.component";
import {ItemEditGuard} from "./item/item-guard.service";

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    AdminRoutingModule,
    SharedModule,
    NgFormsModule,
    ReactiveFormsModule

  ],
  declarations: [
    ItemlistComponent,
    ItemeditComponent,
    ItemviewComponent
  ],
  providers: [
    ItemEditGuard
  ]
})
export class AdminModule { }
