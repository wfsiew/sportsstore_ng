import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  mform: FormGroup;

  constructor(
    private cartService: CartService,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.mform = this.fb.group({
      name: ['', [Validators.required]],
      line1: ['', [Validators.required]],
      line2: [''],
      line3: [''],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      zip: [''],
      country: ['', [Validators.required]],
      giftwrap: [false]
    });
  }

  onSubmit() {
    let fm = this.mform.value;
    let o = {
      name: fm.name,
      line1: fm.line1,
      line2: fm.line2,
      line3: fm.line3,
      city: fm.city,
      state: fm.state,
      zip: fm.zip,
      country: fm.country,
      giftwrap: fm.giftwrap
    }

    this.cartService.checkout(o).subscribe(res => {
      console.log("===");
      console.log(res);
    },
    err => {
      console.log(err);
    })
  }
}
