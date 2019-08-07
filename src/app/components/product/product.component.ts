import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
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
    private messageService: MessageService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.category = params.get('category');
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
    this.messageService.send('add-to-cart', o);
  }

  goto(i) {
    this.page = i;
    this.load();
  }
}
