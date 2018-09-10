import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// *******************************************************************************
//

import { EmoteRoutingModule} from "./emote-routing.module";
import {DanceComponent} from "./dance/dance.component";
import {EmoticonComponent} from "./emoticon/emoticon.component";
import {SprayComponent} from "./spray/spray.component";
import {ToyComponent} from "./toy/toy.component";

import {SkinsModule} from "../skins/skins.module";

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    SkinsModule,
    EmoteRoutingModule
  ],
  declarations: [
    DanceComponent,
    EmoticonComponent,
    SprayComponent,
    ToyComponent
  ]
})
export class EmoteModule { }
