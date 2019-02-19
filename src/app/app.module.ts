import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DbService} from './services/db.service';
import {HttpClientModule} from '@angular/common/http';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [AppComponent, TableComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
  ],
  providers: [DbService],
  bootstrap: [AppComponent],
})
export class AppModule {}
