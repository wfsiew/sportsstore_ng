import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  page = 1;
  category = null;
  list: any = [];
  paginginfo = {};
  pages = [];

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private messageService: MessageService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.category = params.get('category');
      this.page = params.get('page') == null ? 1 : Number(params.get('page'));
      this.load();
    });
  }

  load() {
    this.pages = [];
    this.productService.get_productList(this.page, this.category).subscribe(res => {
      this.list = res['products'];
      this.paginginfo = res['pagingInfo'];
      let n = this.paginginfo['totalPages'];
      for (let i = 1; i <= n; i++) {
        this.pages.push(i);
      }
    },
    err => {
      console.log(err);
    });
  }

  addToCart(o) {
    this.cartService.addItem(o, 1);
    this.messageService.send('app-cart-summary', this.cartService.getCartSummary());
  }

  goto(i) {
    if (!this.category) {
      this.router.navigate(['/product', i]);
    }

    else {
      this.router.navigate(['/product', i, this.category]);
    }
    return false;
    // this.page = i;
    // this.load();
  }
}
