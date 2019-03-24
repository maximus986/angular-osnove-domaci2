import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-category-page',
  templateUrl: './product-category-page.component.html',
  styleUrls: ['./product-category-page.component.sass']
})
export class ProductCategoryPageComponent implements OnInit {
  id: number;
  products: Product[];
  constructor(private route: ActivatedRoute, private productsService: ProductsService) {}

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.route.params.subscribe(categoryId => {
      this.id = Number(categoryId.id);
      this.products = this.productsService.getProductByCategoryId(this.id);
    });
  }
}
