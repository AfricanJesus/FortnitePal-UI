import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {Layout2Component} from './layout/layout-2/layout-2.component';
import {UnreleasedComponent} from "./unreleased/unreleased.component";
import {HomeComponent} from "./home/home.component";
import {DetailComponent} from "./detail/detail.component";
import {AuthGuard} from "./shared/services/auth.guard";


const routes: Routes = [
  // Default
  {
    path: '', runGuardsAndResolvers: 'always', component: Layout2Component, children: [
      {path: 'home', component: HomeComponent},
      {path: 'details/:id', component: DetailComponent},
      {path: 'unreleased', component: UnreleasedComponent},
      {path: '', redirectTo: '/home', pathMatch: 'full'},
    ]
  },
  {path: 'skins', component: Layout2Component, loadChildren: './skins/skins.module#SkinsModule'},
  {path: 'emote', component: Layout2Component, loadChildren: './emote/emote.module#EmoteModule'},
  {path: 'seasons', component: Layout2Component, loadChildren: './seasons/seasons.module#SeasonsModule'},
  {
    path: 'admin',
    component: Layout2Component,
    canActivate: [AuthGuard],
    loadChildren: './admin/admin.module#AdminModule'
  },
  {path: '**', redirectTo: 'home', pathMatch: 'full'},

];


@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: "reload"})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
