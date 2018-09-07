import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Layout2Component } from './layout/layout-2/layout-2.component';
import {Page2Component} from "./page-2/page-2.component";
import {HomeComponent} from "./home/home.component";


const routes: Routes = [
  // Default
  { path: '', redirectTo: '/page-2', pathMatch: 'full' },
  { path: 'home', component: Layout2Component, children: [
    { path: '', component: HomeComponent },
  ]},
  { path: 'page-2', component: Layout2Component, children: [
    { path: '', component: Page2Component },
  ]},
  { path: 'skins', component: Layout2Component, loadChildren: './skins/skins.module#SkinsModule'},
  { path: 'emote', component: Layout2Component, loadChildren: './emote/emote.module#EmoteModule'},
  { path: 'seasons', component: Layout2Component, loadChildren: './seasons/seasons.module#SeasonsModule'}

];

// *******************************************************************************
//

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
