import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { LayoutComponent } from './shared/components/layout/layout.component';
// import { ProductComponent } from './components/product/product.component';
// import { CartComponent } from './components/cart/cart.component';
// import { CheckoutComponent } from './components/order/checkout/checkout.component';
// import { CompletedComponent } from './components/order/completed/completed.component';
import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';
import { OrderComponent } from './components/order/order/order.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: './modules/layout/layout.module#LayoutModule'
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
