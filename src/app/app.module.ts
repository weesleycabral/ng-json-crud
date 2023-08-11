import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';

import { HttpClientModule } from '@angular/common/http';
import { CreateProductComponent } from './pages/create-product/create-product.component';
import { HeaderComponent } from './pages/header/header.component'
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DeleteProductComponent } from './pages/delete-product/delete-product.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateProductComponent,
    HeaderComponent,
    DeleteProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
