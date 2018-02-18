import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { CartProductsComponent } from './cart-products/cart-products.component';
import { FormComponent } from './form/form.component';
import { CartFormComponent } from './cart-form/cart-form.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [CartComponent, CartProductsComponent, FormComponent, CartFormComponent]
})
export class CartModule { }
