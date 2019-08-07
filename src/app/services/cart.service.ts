import { Injectable } from '@angular/core';
import { CartLine } from '../models/cart'

@Injectable({
  providedIn: 'root'
})
export class CartService {

  lines: CartLine[] = [];

  constructor() { }

  saveCart() {
    if (this.lines && this.lines.length) {
      localStorage.setItem('ss-cart', JSON.stringify(this.lines));
    }

    else {
      this.lines = [];
      localStorage.setItem('ss-cart', JSON.stringify(this.lines));
    }
  }

  addItem(product, quantity: number) {
    let line = this.lines.filter(x => x.product.productID === product.productID).pop();
    if (!line) {
      let o = new CartLine();
      o.product = product;
      o.quantity = quantity;
      this.lines.push(o);
    }

    else {
      line.quantity += quantity;
    }

    this.saveCart();
  }
}
