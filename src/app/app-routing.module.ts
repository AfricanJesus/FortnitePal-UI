import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {Layout2Component} from './layout/layout-2/layout-2.component';
import {HomeComponent} from "./home/home.component";
import {DetailComponent} from "./detail/detail.component";
import {AuthGuard} from "./shared/services/auth.guard";
import {ItemsComponent} from "./items/items.component";
import {ItemseasonComponent} from "./shared/components/itemseason/itemseason.component";


const routes: Routes = [
  // Default
  {
    path: '', runGuardsAndResolvers: 'always', component: Layout2Component, children: [
      {path: 'home', component: HomeComponent},
      {path: 'details/:id', component: DetailComponent},
      {path: 'items/:itemType', component: ItemsComponent},
      {path: 'seasons/:seasonNumber', component: ItemseasonComponent},
      {path: '', redirectTo: '/home', pathMatch: 'full'},
    ]
  },
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
