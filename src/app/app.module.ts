import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { router } from './app.router';

import { AppComponent } from './app.component';

import { CartModule } from './modules/cart/cart.module';
import { ProductsModule } from './modules/products/products.module';

import { SourceService } from './services/source.service';
import { CartService } from './services/cart.service';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CartModule,
    ProductsModule,
    BrowserModule,
    HttpModule,
    router
  ],
  providers: [
     SourceService,
     CartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
