import { Injectable } from '@angular/core';
import { IProduct } from './catalog/product.model';
import { ILineItem } from './cart/line-item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: ILineItem[] = [];

  constructor() { }

  getTotalPrice(): number {
    return (
      Math.round(
        this.cart.reduce<number>((prev, cur) => {
          return (
            prev + cur.price * (cur.product.price * (1 - cur.product.discount))
          );
        }, 0) * 100
          ) / 100
    );
  }

  findLineItem(product : IProduct) {
    return this.cart.find((item) => item.product.id === product.id);
  }

  add(product: IProduct) {
    let lineItem = this.findLineItem(product);
    if (lineItem !== undefined) {
      lineItem.quantity++;
    } else {
      lineItem = { product: product, quantity: 1 };
      this.cart.push({ product, quantity: 1 });
    }
  }

  // cart: IProduct[] = [];  

  // constructor() { }

  // add(product: IProduct) {
  //   this.cart.push(product);
  //   console.log(`Added ${product.name} to cart`);
  // }
}
