import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './modules/cart/cart.component';
import { ProductsComponent } from './modules/products/products.component';

const routes: Routes = [
  { path: 'cart', component: CartComponent },
  { path: 'products',      component: ProductsComponent },
  { path: 'products/:id',      component: ProductsComponent },
  { path: '**', component: ProductsComponent }
];

export const router: ModuleWithProviders = RouterModule.forRoot(routes);
