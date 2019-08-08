import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from '../../../services/cart.service';
import { MessageService } from '../../../services/message.service';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit, OnDestroy {

  subs: Subscription;
  cartsummary = {
    has_item: false
  };

  constructor(
    private cartService: CartService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.cartService.getLines();
    this.cartsummary = this.cartService.getCartSummary();
    this.subs = this.messageService.get().subscribe(x => {
      if (x.name === 'app-cart-summary') {
        this.cartsummary = x.data;
      }
    });
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
