import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from '../../../services/cart.service';
import { MessageService } from '../../../services/message.service';
import { Helper } from 'src/app/shared/helper';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  mform: FormGroup;

  constructor(
    private cartService: CartService,
    private messageService: MessageService,
    private router: Router,
    private fb: FormBuilder
  ) { }

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
      giftwrap: fm.giftwrap,
      cartLines: this.cartService.getLines()
    }

    if (Helper.isEmpty(o.cartLines)) {
      alert('Sorry, your cart is empty!');
      return;
    }

    this.cartService.checkout(o).subscribe(res => {
      this.cartService.clear();
      this.messageService.send('app-cart-summary', this.cartService.getCartSummary());
      this.router.navigate(['/completed']);
    },
    err => {
      console.log(err);
    });
  }

  invalid(s: string) {
    const m = this.mform.controls[s];
    return m.invalid && (m.dirty || m.touched);
  }

  invalidForm() {
    return this.mform.invalid;
  }
}
