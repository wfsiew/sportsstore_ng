import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  lines: any = [];
  total_price = 0;

  constructor(
    private cartService: CartService,
    private messageService: MessageService,
    private location: Location
  ) { }

  ngOnInit() {
    this.load();
  }

  load() {
    this.lines = this.cartService.getLines();
    let x = this.cartService.getCartSummary();
    this.total_price = x.total_price;
  }

  removeFromCart(o) {
    this.cartService.removeItem(o);
    this.messageService.send('app-cart-summary', this.cartService.getCartSummary());
    this.load();
  }

  back() {
    this.location.back();
    return false;
  }
}
