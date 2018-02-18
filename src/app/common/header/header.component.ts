import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private cart: any = {};

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.updateEmitter.subscribe(this.updateCart.bind(this));
    this.updateCart(this.cartService.getProducts());
  }

  updateCart(products: any): void {
    this.cart = Object.keys(products).reduce((prev, next) => {
      prev.price += products[next].amount * products[next].price;
      prev.amount += products[next].amount;
      return prev;
    }, {price: 0, amount: 0});
  }

}
