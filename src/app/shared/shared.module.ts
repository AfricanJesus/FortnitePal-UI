import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

import {RouterModule} from "@angular/router";
import {ItemsimpleComponent} from "./components/itemsimple/itemsimple.component";
import {ChallengesetComponent} from "./components/challengeset/challengeset.component";
import {StylesetComponent} from "./components/styleset/styleset.component";
import {ItemseasonComponent} from "./components/itemseason/itemseason.component";


@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    RouterModule,
  ],
  declarations: [
    ItemsimpleComponent,
    ChallengesetComponent,
    StylesetComponent,
    ItemseasonComponent
  ], exports: [
    ItemsimpleComponent,
    ChallengesetComponent,
    StylesetComponent
  ]
})
export class SharedModule {
}
