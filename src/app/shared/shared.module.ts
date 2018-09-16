

import {ItemsimpleComponent} from "./components/itemsimple.component";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {ItemsingleComponent} from "./components/itemsingle.component";
import {RouterModule} from "@angular/router";


@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    RouterModule
  ],
  declarations: [
    ItemsimpleComponent,
    ItemsingleComponent
  ], exports: [
    ItemsimpleComponent,
    ItemsingleComponent
  ]
})
export class SharedModule { }
