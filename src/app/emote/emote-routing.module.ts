import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DanceComponent} from "./dance/dance.component";
import {EmoticonComponent} from "./emoticon/emoticon.component";
import {SprayComponent} from "./spray/spray.component";
import {ToyComponent} from "./toy/toy.component";





@NgModule({
  imports: [RouterModule.forChild([
    { path: 'dance', component: DanceComponent},
    { path: 'emoticon', component: EmoticonComponent},
    { path: 'spray', component: SprayComponent},
    { path: 'toy', component: ToyComponent}

  ])],
  exports: [RouterModule]
})
export class EmoteRoutingModule { }
