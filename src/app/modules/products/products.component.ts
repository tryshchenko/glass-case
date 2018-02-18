import { Component, OnInit } from '@angular/core';
import { SourceService } from '../../services/source.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public productsOriginal: any[] = [];
  public products: any[] = [];
  public category?: string;

  constructor(private sourceService: SourceService) { }

  ngOnInit() {
    console.log(this.sourceService);
    this.sourceService.getData().subscribe(products => {
      this.products = products;
      this.productsOriginal = products.slice(0, products.length);
    });
  }

  onCategoryChange(category) {
    console.log('selected category');
    this.category = category;
    const products = this.productsOriginal.slice(0, this.productsOriginal.length);
    if (!category) {
      this.products = products;
      return;
    }
    this.products = products.filter(product => product.category === category);
  }

}
