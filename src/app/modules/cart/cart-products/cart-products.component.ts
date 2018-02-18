import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart-products',
  templateUrl: './cart-products.component.html',
  styleUrls: ['./cart-products.component.css']
})
export class CartProductsComponent {
  @Input() products: any = {};
  @Output() onProductRemove: EventEmitter<any> = new EventEmitter();
  constructor() { }

  onRemove(product: any): void {
    const uid: number = product && product.uid;
    if (!uid) {
      return;
    }
    this.onProductRemove.emit(uid);
  }
}
