import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cart-form',
  templateUrl: './cart-form.component.html',
  styleUrls: ['./cart-form.component.css']
})
export class CartFormComponent {
  @Input() products: any = {};
  constructor() { }

  formatCart(): string {
    return Object.keys(this.products).map(id => {
      const p = this.products[id];
      return `${p.uid}: (${p.name}) ${p.price} x ${p.amount}`;
    }).join('\n');
  }
}
