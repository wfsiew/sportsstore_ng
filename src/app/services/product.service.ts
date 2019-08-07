import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { SharedService } from '../shared/shared.service';
import { Helper } from '../shared/helper';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productUrl = SharedService.productUrl;

  constructor(private http: HttpClient) { }

  get_productList(page: number, category: string) {
    if (Helper.isEmpty(category)) {
      return this.http.get(`${this.productUrl}/${page}`);
    }

    else {
      return this.http.get(`${this.productUrl}/${category}/${page}`);
    }
  }

  get_categoryList() {
    return this.http.get(`${this.productUrl}/categories`);
  }
}
