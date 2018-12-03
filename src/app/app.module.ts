import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// *******************************************************************************
// NgBootstrap

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// *******************************************************************************
// App

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { LayoutModule } from './layout/layout.module';

// *******************************************************************************
// Pages

import {HomeComponent} from "./home/home.component";
import {DetailComponent } from './detail/detail.component';
import {AdminComponent} from "./admin/admin.component";

import {HttpClientModule} from "@angular/common/http";
import {SharedModule} from "./shared/shared.module";


import {ItemService} from "./shared/services/item.service";
import {StylesetService} from "./shared/services/styleset.service";
import {AuthService} from "./shared/services/auth.service";
import {AuthGuard} from "./shared/services/auth.guard";
import {FileService} from "./shared/services/file.service";
import {TreeViewModule} from '@progress/kendo-angular-treeview';
import {ItemsComponent} from './items/items.component';
import {RarityColorPipe} from "./shared/RarityColorPipe";

// *******************************************************************************
//


@NgModule({
  declarations: [
    AppComponent,

    // Pages
    HomeComponent,
    DetailComponent,
    AdminComponent,
    ItemsComponent,
    RarityColorPipe,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    // App
    AppRoutingModule,
    LayoutModule,
    HttpClientModule,
    SharedModule,
    TreeViewModule
  ],
  providers: [
    Title,
    AppService,
    ItemService,
    StylesetService,
    AuthService,
    AuthGuard,
    FileService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
