import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ItemlistComponent} from "./item/itemlist.component";
import {ItemeditComponent} from "./item/itemedit.component";
import {ItemviewComponent} from "./item/itemview.component";
import {ItemEditGuard} from "./item/item-guard.service";





@NgModule({
  imports: [RouterModule.forChild([
    {path: 'items/view/:id', component: ItemviewComponent},
    {path: 'items/edit/:id', canDeactivate: [ItemEditGuard], component: ItemeditComponent},
    {path: 'items', component: ItemlistComponent}

  ])],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
