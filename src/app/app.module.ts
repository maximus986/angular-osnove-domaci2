import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsPageComponent } from './components/products-page/products-page.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { ProductItemComponent } from './components/products-page/product-item/product-item.component';
import { ProductCategoryPageComponent } from './components/product-category-page/product-category-page.component';
import { ProductCategoriesComponent } from './components/product-categories/product-categories.component';
import { ProductCategoryItemComponent } from './components/product-categories/product-category-item/product-category-item.component';
import { ProductPageComponent } from './components/product-page/product-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsPageComponent,
    AboutPageComponent,
    ProductItemComponent,
    ProductCategoryPageComponent,
    ProductCategoriesComponent,
    ProductCategoryItemComponent,
    ProductPageComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
