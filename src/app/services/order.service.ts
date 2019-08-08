import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { SharedService } from '../shared/shared.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private orderUrl = SharedService.orderUrl;

  constructor(private http: HttpClient) { }

  get_orderList() {
    return this.http.get(this.orderUrl);
  }
}
