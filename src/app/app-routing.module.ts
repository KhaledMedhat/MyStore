import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsComponent } from './items/items.component';
import { CartComponent } from './cart/cart.component';
import { ItemdetailsComponent } from './itemdetails/itemdetails.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { FormComponent } from './form/form.component';

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
    path: 'form',
    component: FormComponent,
  },
  {
    path: 'confirmation',
    component: ConfirmationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
