import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsComponent } from './items/items.component';
import { CartComponent } from './cart/cart.component';
import { ItemdetailsComponent } from './itemdetails/itemdetails.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  {
    path: '',
    component: ItemsComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'details',
    component: ItemdetailsComponent,
  },
  {
    path: 'payment',
    component: PaymentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
