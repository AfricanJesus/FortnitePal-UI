import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule as NgFormsModule, ReactiveFormsModule} from '@angular/forms';

import {AdminRoutingModule} from "./admin-routing.module";

import {SharedModule} from "../shared/interfaces/shared.module";
import {ItemListComponent} from "./item/list/item-list.component";
import {ItemEditComponent} from "./item/edit/item-edit.component";
import {ItemViewComponent} from "./item/view/item-view.component";
import {ItemEditGuard} from "./item/item-guard.service";
import {UploadComponent} from './upload/upload.component';
import {DropzoneModule} from 'ngx-dropzone-wrapper';
import {FileUploadModule} from "ng2-file-upload";
import {SelectModule} from "ng-select";

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    AdminRoutingModule,
    SharedModule,
    NgFormsModule,
    ReactiveFormsModule,
    DropzoneModule,
    FileUploadModule,
    SelectModule
  ],
  declarations: [
    ItemListComponent,
    ItemEditComponent,
    ItemViewComponent,
    UploadComponent
  ],
  providers: [
    ItemEditGuard
  ]
})
export class AdminModule { }
