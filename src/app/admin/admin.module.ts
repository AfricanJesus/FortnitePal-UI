import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, FormsModule as NgFormsModule, ReactiveFormsModule} from '@angular/forms';

import {AdminRoutingModule} from "./admin-routing.module";

import {SweetAlert2Module} from '@toverux/ngx-sweetalert2';
import {SelectModule} from "ng-select";

import {SharedModule} from "../shared/shared.module";
import {ItemListComponent} from "./item/list/item-list.component";
import {ItemEditComponent} from "./item/edit/item-edit.component";
import {ItemViewComponent} from "./item/view/item-view.component";
import {ItemEditGuard} from "./item/item-guard.service";
import {UploadImageComponent} from './image/upload/upload-image.component';
import {ManageImageComponent} from './image/manage/manage-image.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    AdminRoutingModule,
    SharedModule,
    NgFormsModule,
    FormsModule,
    ReactiveFormsModule,
    SelectModule,
    SweetAlert2Module
  ],
  declarations: [
    ItemListComponent,
    ItemEditComponent,
    ItemViewComponent,
    UploadImageComponent,
    ManageImageComponent
  ],
  providers: [
    ItemEditGuard,
  ]
})
export class AdminModule { }
