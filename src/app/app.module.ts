import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MessageService } from './services/message.service';
import { ProductService } from './services/product.service';
import { CartService } from './services/cart.service';
import { OrderService } from './services/order.service';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// import { LayoutComponent } from './shared/components/layout/layout.component';
// import { NavigationMenuComponent } from './shared/components/navigation-menu/navigation-menu.component';
// import { CartSummaryComponent } from './shared/components/cart-summary/cart-summary.component';
// import { ProductComponent } from './components/product/product.component';
// import { CartComponent } from './components/cart/cart.component';
// import { CheckoutComponent } from './components/order/checkout/checkout.component';
// import { CompletedComponent } from './components/order/completed/completed.component';
import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';
import { OrderComponent } from './components/order/order/order.component';

@NgModule({
  declarations: [
    AppComponent,
    // LayoutComponent,
    // NavigationMenuComponent,
    // CartSummaryComponent,
    // ProductComponent,
    // CartComponent,
    // CheckoutComponent,
    // CompletedComponent,
    AdminLayoutComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [
    MessageService,
    ProductService,
    CartService,
    OrderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
