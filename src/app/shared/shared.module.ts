

import {ItemsimpleComponent} from "./components/itemsimple.component";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  imports: [
    CommonModule,
    NgbModule,

  ],
  declarations: [
    ItemsimpleComponent
  ], exports: [
    ItemsimpleComponent
  ]
})
export class SharedModule { }
