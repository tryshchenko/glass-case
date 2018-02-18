import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  private products: any = {};

  constructor(private cartService: CartService) {
    this.cartService.updateEmitter.subscribe(products => this.products = products);
  }

  ngOnInit() {
    this.cartService.updateEmitter.subscribe(this.updateProducts.bind(this));
    this.updateProducts(this.cartService.getProducts());
  }

  updateProducts(products: any): void {
    this.products = Object.keys(products).map(id => products[id]);
  }

  onProductRemove(uid: number): void {
    this.cartService.remove(uid);
  }
}
