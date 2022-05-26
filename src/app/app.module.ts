import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items.component';
import { CartComponent } from './cart/cart.component';
import { FormsModule } from '@angular/forms';
import { NavComponent } from './nav/nav.component';
import { ItemdetailsComponent } from './itemdetails/itemdetails.component';
import { FormComponent } from './form/form.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';

@NgModule({
  declarations: [AppComponent, ItemsComponent, CartComponent, NavComponent, ItemdetailsComponent, FormComponent, ConfirmationComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
