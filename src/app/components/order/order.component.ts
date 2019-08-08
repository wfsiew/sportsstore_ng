import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  list: any = [];

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.load();
  }

  load() {
    this.orderService.get_orderList().subscribe(res => {
      this.list = res;
    },
    err => {
      console.log(err);
    });
  }

  markShipped(o) {
    alert(o.orderID)
  }
}
