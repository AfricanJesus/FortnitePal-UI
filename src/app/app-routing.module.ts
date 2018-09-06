import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// *******************************************************************************
// Layouts

import { Layout2Component } from './layout/layout-2/layout-2.component';
import {Page2Component} from "./page-2/page-2.component";
import {HomeComponent} from "./home/home.component";

// *******************************************************************************
// Pages


// *******************************************************************************
// App


// *******************************************************************************
// Routes

const routes: Routes = [
  // Default
  { path: '', redirectTo: '/page-2', pathMatch: 'full' },
  { path: 'home', component: Layout2Component, children: [
    { path: '', component: HomeComponent },
  ]},
  { path: 'page-2', component: Layout2Component, children: [
    { path: '', component: Page2Component },
  ]},
  { path: 'locker', component: Layout2Component, loadChildren: './locker/locker.module#LockerModule'}

];

// *******************************************************************************
//

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
