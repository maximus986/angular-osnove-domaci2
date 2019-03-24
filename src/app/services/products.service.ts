import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Dashawn Courts',
      description: "Duchess; 'and the moral of that is--\"Oh, 'tis love, 'tis love, 'tis love, 'tis love, that makes.",
      photo: 'http://www.bestjquery.com/tutorial/product-grid/demo43/images/img-5.jpg',
      price: 20,
      old_price: 0,
      rank: 2,
      category_id: 3
    },
    {
      id: 2,
      name: 'Casper Groves',
      description: "I've finished.' So they went up to the Cheshire Cat: now I shall fall right THROUGH the earth! How.",
      photo: 'http://www.bestjquery.com/tutorial/product-grid/demo43/images/img-5.jpg',
      price: 136,
      old_price: 193,
      rank: 5,
      category_id: 1
    },
    {
      id: 3,
      name: 'Nina Landing',
      description: "Dormouse into the roof bear?--Mind that loose slate--Oh, it's coming down! Heads below!' (a loud.",
      photo: 'http://www.bestjquery.com/tutorial/product-grid/demo42/images/img-3.jpg',
      price: 194,
      old_price: 0,
      rank: 3,
      category_id: 1
    },
    {
      id: 4,
      name: 'Leon Common',
      description: "Alice. 'I mean what I see\"!' 'You might just as if it began ordering people about like mad things.",
      photo: 'http://www.bestjquery.com/tutorial/product-grid/demo45/images/img-5.jpg',
      price: 250,
      old_price: 0,
      rank: 4,
      category_id: 3
    },
    {
      id: 5,
      name: 'Cole Views',
      description: "Queen, in a thick wood. 'The first thing she heard a little bottle that stood near the house.",
      photo: 'http://www.bestjquery.com/tutorial/product-grid/demo43/images/img-1.jpg',
      price: 222,
      old_price: 0,
      rank: 1,
      category_id: 2
    },
    {
      id: 6,
      name: 'Chelsea Dale',
      description: "King. (The jury all looked puzzled.) 'He must have been ill.' 'So they were,' said the Dormouse.",
      photo: 'http://www.bestjquery.com/tutorial/product-grid/demo46/images/img-3.jpg',
      price: 278,
      old_price: 367,
      rank: 3,
      category_id: 1
    },
    {
      id: 7,
      name: 'Hackett Shoals',
      description: "Turtle. 'Very much indeed,' said Alice. 'It must be kind to them,' thought Alice, 'shall I NEVER.",
      photo: 'http://www.bestjquery.com/tutorial/product-grid/demo42/images/img-7.jpg',
      price: 242,
      old_price: 0,
      rank: 3,
      category_id: 1
    },
    {
      id: 8,
      name: 'Romaguera Circles',
      description: "I'll manage better this time,' she said these words her foot slipped, and in despair she put her.",
      photo: 'http://www.bestjquery.com/tutorial/product-grid/demo46/images/img-3.jpg',
      price: 263,
      old_price: 275,
      rank: 3,
      category_id: 2
    },
    {
      id: 9,
      name: 'Willms Point',
      description: "Gryphon only answered 'Come on!' cried the Gryphon, with a pair of white kid gloves and the little.",
      photo: 'http://www.bestjquery.com/tutorial/product-grid/demo42/images/img-1.jpg',
      price: 24,
      old_price: 0,
      rank: 4,
      category_id: 2
    },
    {
      id: 10,
      name: 'Montana Summit',
      description: "YOU.--Come, I'll take no denial; We must have imitated somebody else's hand,' said the March Hare.",
      photo: 'http://www.bestjquery.com/tutorial/product-grid/demo42/images/img-5.jpg',
      price: 113,
      old_price: 0,
      rank: 4,
      category_id: 3
    }
  ];

  getProducts() {
    return this.products;
  }

  getProductById(id): Product {
    for (let product of this.products) {
      if (product.id === id) {
        return product;
      }
    }
  }

  getProductByCategoryId(id) {
    return this.products.filter(product => product.category_id === id);
  }
}
