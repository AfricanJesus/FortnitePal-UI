

import {ItemsimpleComponent} from "./components/itemsimple.component";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {ItemsingledetailComponent} from "./components/itemsingledetail.component";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    RouterModule
  ],
  declarations: [
    ItemsimpleComponent,
    ItemsingledetailComponent
  ], exports: [
    ItemsimpleComponent,
    ItemsingledetailComponent
  ]
})
export class SharedModule { }
