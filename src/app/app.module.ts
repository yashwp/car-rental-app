import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';

import {AppComponent} from './app.component';
import {SearchComponent} from './search/search.component';
import {PipesModule} from './shared/pipes/pipes.module';
import {CommonService} from './shared/services/common.service';
import { CarsCatalogueComponent } from './cars-catalogue/cars-catalogue.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    CarsCatalogueComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    BsDatepickerModule.forRoot(),
    PipesModule
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
