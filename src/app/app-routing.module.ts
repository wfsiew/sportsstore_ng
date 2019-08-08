import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { ProductComponent } from './components/product/product.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/order/checkout/checkout.component';
import { CompletedComponent } from './components/order/completed/completed.component';
import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';
import { OrderComponent } from './components/order/order/order.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '', redirectTo: '/product', pathMatch: 'full'
      },
      {
        path: 'product', component: ProductComponent
      },
      {
        path: 'product/:page', component: ProductComponent
      },
      {
        path: 'product/:page/:category', component: ProductComponent
      },
      {
        path: 'cart', component: CartComponent
      },
      {
        path: 'checkout', component: CheckoutComponent
      },
      {
        path: 'completed', component: CompletedComponent
      }
    ]
  },
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: 'order', component: OrderComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
