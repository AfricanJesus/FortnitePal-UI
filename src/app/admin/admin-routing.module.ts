import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ItemListComponent} from "./item/list/item-list.component";
import {ItemEditComponent} from "./item/edit/item-edit.component";
import {ItemViewComponent} from "./item/view/item-view.component";
import {ItemEditGuard} from "./item/item-guard.service";
import {ManageImageComponent} from "./image/manage/manage-image.component";





@NgModule({
  imports: [RouterModule.forChild([
    {path: 'manage', component: ManageImageComponent},
    {path: 'items/view/:id', component: ItemViewComponent},
    {path: 'items/edit/:id', canDeactivate: [ItemEditGuard], component: ItemEditComponent},
    {path: 'items', component: ItemListComponent}

  ])],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
