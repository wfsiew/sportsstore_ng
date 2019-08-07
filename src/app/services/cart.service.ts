import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { CartLine } from '../models/cart';
import _ from 'lodash';
import { SharedService } from '../shared/shared.service';
import { Helper } from '../shared/helper';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  lines: CartLine[] = [];
  private orderUrl = SharedService.orderUrl;

  constructor(private http: HttpClient) { }

  saveCart() {
    if (this.lines && this.lines.length) {
      localStorage.setItem('app-cart', JSON.stringify(this.lines));
    }

    else {
      this.lines = [];
      localStorage.setItem('app-cart', JSON.stringify(this.lines));
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

  removeItem(product) {
    this.lines = this.lines.filter(x => x.product.productID !== product.productID);
    this.saveCart();
  }

  loadLines() {
    let ls = localStorage.getItem('app-cart');
    if (!ls) {
      this.lines = [];
    }

    else {
      this.lines = JSON.parse(ls);
    }
  }

  getLines() {
    this.loadLines();
    return this.lines;
  }

  getCartSummary() {
    let ls = this.getLines();
    let total_quantity = 0;
    let total = 0;
    _.each(ls, x => {
      total_quantity += x.quantity;
      total += x.product.price * x.quantity;
    });

    return {
      has_item: !Helper.isEmpty(ls),
      total_quantity: total_quantity,
      total_price: total
    };
  }

  checkout(o) {
    return this.http.post(`${this.orderUrl}/checkout`, o);
  }
}
