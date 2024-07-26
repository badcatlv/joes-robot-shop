import { Injectable } from '@angular/core';
import { IProduct } from '../catalog/product.model';
import { ILineItem } from '../catalog/line-item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: ILineItem[] = [];

  constructor() { }

  getTotalPrice() {
    return (
      Math.round(
        this.cart.reduce<number>((prev, cur) => {
          return (
            prev + cur.quantity * (cur.product.price * (1 - cur.product.discount))
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
      this.cart.push(lineItem);
    }

    console.log(`Added ${product.name} to cart`);
    console.log(`Total price: ${this.getTotalPrice()}`);
  }
  

  // cart: IProduct[] = [];  

  // constructor() { }

  // add(product: IProduct) {
  //   this.cart.push(product);
  //   console.log(`Added ${product.name} to cart`);
  // }
}
