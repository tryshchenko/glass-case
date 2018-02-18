import { Injectable, EventEmitter } from '@angular/core';
import { clone } from 'ramda';

@Injectable()
export class CartService {

  private products: any = {};
  public updateEmitter: EventEmitter<any> = new EventEmitter();

  constructor() {
    const savedProducts: string = window.localStorage.getItem('cart');
    if (savedProducts) {
      this.products = JSON.parse(savedProducts);
    }
  }

  add(element: any): void {
    if (this.products[element.uid]) {
      this.products[element.uid].amount++;
      this.updateStorage();
      return;
    }
    this.products[element.uid] = Object.assign({}, element, {amount: 1});
    this.updateStorage();
  }

  updateStorage(): void {
    // yep, window.localStorage. Cry.
    this.updateEmitter.emit(this.getProducts());
    window.localStorage.setItem('cart', JSON.stringify(this.products));
  }

  remove(id: number): void {
    delete this.products[id];
    this.updateStorage();
  }

  getProducts(): any {
    return clone(this.products);
  }
}
