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
import {ItemSimpleService} from "./shared/services/itemsimple.service";
import {HttpClientModule} from "@angular/common/http";
import {ItemdetailService} from "./shared/services/itemdetail.service";
import {UnreleasedComponent} from "./unreleased/unreleased.component";
import {SharedModule} from "./shared/shared.module";
import { DetailComponent } from './detail/detail.component';


// *******************************************************************************
//

@NgModule({
  declarations: [
    AppComponent,

    // Pages
    HomeComponent,
    UnreleasedComponent,
    DetailComponent
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
    SharedModule
  ],
  providers: [
    Title,
    AppService,
    ItemSimpleService,
    ItemdetailService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
