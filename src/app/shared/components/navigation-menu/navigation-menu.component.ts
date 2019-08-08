import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../services/product.service';

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
    private route: ActivatedRoute,
    private router: Router
  ) { }

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

  home() {
    this.category = null;
    this.router.navigate(['/product']);
    return false;
  }

  goto(o) {
    this.category = o;
    this.router.navigate(['/product', 1, o]);
    return false;
  }

  isCategorySelected(o) {
    return this.category === o;
  }
}
