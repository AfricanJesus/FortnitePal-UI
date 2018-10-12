import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule as NgFormsModule } from '@angular/forms';

import {AdminRoutingModule} from "./admin-routing.module";

import {SharedModule} from "../shared/shared.module";
import {ItemlistComponent} from "./item/itemlist.component";

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    AdminRoutingModule,
    SharedModule,
    NgFormsModule
  ],
  declarations: [
    ItemlistComponent
  ]
})
export class AdminModule { }
