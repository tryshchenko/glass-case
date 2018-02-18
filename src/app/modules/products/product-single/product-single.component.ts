import { Component, OnInit, Input } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-product-single',
  templateUrl: './product-single.component.html',
  styleUrls: ['./product-single.component.css']
})
export class ProductSingleComponent implements OnInit {
  @Input() product: any = {};
  constructor(private cartService: CartService) { }

  ngOnInit() {
     console.log(this.product);
  }

  trim(text) {
    const trimmed = text.trim();
    return `${trimmed.substring(0, 150)}...`;
  }

  price(price) {
    if (price && price > 0) {
      return `${environment.currencyPrefix}${price}${environment.currencyPostfix}`;
    }
    return 'Ask a manager';
  }

  addToCart(product) {
    this.cartService.add(product);
  }

}
