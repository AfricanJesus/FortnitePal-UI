import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Season1Component} from "./season1/season1.component";
import {Season2Component} from "./season2/season2.component";
import {Season3Component} from "./season3/season3.component";
import {Season4Component} from "./season4/season4.component";
import {Season5Component} from "./season5/season5.component";





@NgModule({
  imports: [RouterModule.forChild([
    { path: 'season1', component: Season1Component},
    { path: 'season2', component: Season2Component},
    { path: 'season3', component: Season3Component},
    { path: 'season4', component: Season4Component},
    { path: 'season5', component: Season5Component}
  ])],
  exports: [RouterModule]
})
export class SeasonsRoutingModule { }
