import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ItemlistComponent} from "./item/itemlist.component";





@NgModule({
  imports: [RouterModule.forChild([
     { path: 'items', component: ItemlistComponent}

  ])],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
