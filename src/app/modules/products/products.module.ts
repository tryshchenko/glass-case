import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCategoriesComponent } from './product-categories/product-categories.component';
import { ProductSingleComponent } from './product-single/product-single.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProductsComponent, ProductListComponent, ProductCategoriesComponent, ProductSingleComponent]
})
export class ProductsModule { }
