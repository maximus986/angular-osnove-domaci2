import { Injectable } from '@angular/core';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private categories: Category[] = [
    {
      id: 1,
      name: 'Casual'
    },
    {
      id: 2,
      name: 'Modern'
    },
    {
      id: 3,
      name: 'Elegant'
    }
  ];

  getCategories() {
    return this.categories;
  }

  getCategoryById(id): Category {
    for (let category of this.categories) {
      if (category.id === id) {
        return category;
      }
    }
  }
}
