

import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

import {RouterModule} from "@angular/router";
import {ItemsingleComponent} from "./components/itemsingle/itemsingle.component";
import {ItemsimpleComponent} from "./components/itemsimple/itemsimple.component";
import {ChallengesetComponent} from "./components/challengeset/challengeset.component";
import {StylesetComponent} from "./components/styleset/styleset.component";


@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    RouterModule
  ],
  declarations: [
    ItemsimpleComponent,
    ItemsingleComponent,
    ChallengesetComponent,
    StylesetComponent
  ], exports: [
    ItemsimpleComponent,
    ItemsingleComponent,
    ChallengesetComponent,
    StylesetComponent
  ]
})
export class SharedModule { }
