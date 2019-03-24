import { Component, OnInit, Input } from '@angular/core';
import { Category } from 'src/app/models/category';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-category-item',
  templateUrl: './product-category-item.component.html',
  styleUrls: ['./product-category-item.component.sass']
})
export class ProductCategoryItemComponent implements OnInit {
  @Input() category: Category;
  id: number;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.route.params.subscribe(categoryId => {
      this.id = Number(categoryId.id);
      console.log(this.id);
    });
  }
}
