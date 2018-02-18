import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { uniq } from 'ramda';

@Component({
  selector: 'app-product-categories',
  templateUrl: './product-categories.component.html',
  styleUrls: ['./product-categories.component.css']
})
export class ProductCategoriesComponent {
  @Input() products: any[] = [];
  @Input() activeCategory?: string;
  @Output() onCategoryChange: EventEmitter<any> = new EventEmitter();

  public categories: string[] = [];

  constructor() { }

  ngOnChanges() {
    const raw = this.products.map(product => product.category);
    console.log(raw);
    this.categories = uniq(raw);
  }

  onChange(category?: string) {
    this.activeCategory = category;
    this.onCategoryChange.emit(category);
  }

}
