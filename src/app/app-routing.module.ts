import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsPageComponent } from './components/products-page/products-page.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { ProductCategoryPageComponent } from './components/product-category-page/product-category-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'products', component: ProductsPageComponent },
  { path: 'products/product/:id', component: ProductPageComponent },
  { path: 'products/category/:id', component: ProductCategoryPageComponent },
  { path: 'about', component: AboutPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
