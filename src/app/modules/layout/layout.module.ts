import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../../shared/components/layout/layout.component';
import { NavigationMenuComponent } from '../../shared/components/navigation-menu/navigation-menu.component';
import { CartSummaryComponent } from '../../shared/components/cart-summary/cart-summary.component';
import { ProductComponent } from '../../components/product/product.component';
import { CartComponent } from '../../components/cart/cart.component';
import { CheckoutComponent } from '../../components/order/checkout/checkout.component';
import { CompletedComponent } from '../../components/order/completed/completed.component';

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
  }
]

@NgModule({
  declarations: [
    LayoutComponent,
    NavigationMenuComponent,
    CartSummaryComponent,
    ProductComponent,
    CartComponent,
    CheckoutComponent,
    CompletedComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class LayoutModule { }
