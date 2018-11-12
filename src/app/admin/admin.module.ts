import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule as NgFormsModule, ReactiveFormsModule} from '@angular/forms';

import {AdminRoutingModule} from "./admin-routing.module";

import {SharedModule} from "../shared/interfaces/shared.module";
import {ItemListComponent} from "./item/item-list.component";
import {ItemEditComponent} from "./item/item-edit.component";
import {ItemViewComponent} from "./item/item-view.component";
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
    ItemListComponent,
    ItemEditComponent,
    ItemViewComponent
  ],
  providers: [
    ItemEditGuard
  ]
})
export class AdminModule { }
