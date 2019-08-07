import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.css']
})
export class NavigationMenuComponent implements OnInit {

  categorylist: any = [];
  category = null;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.category = params.get('category');
    });
    this.productService.get_categoryList().subscribe(res => {
      this.categorylist = res;
    },
    err => {
      console.log(err);
    });
  }

  isCategorySelected(o) {
    return this.category === o;
  }
}
