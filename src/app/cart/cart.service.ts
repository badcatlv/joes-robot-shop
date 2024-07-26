import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

import { IProduct } from '../catalog/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: BehaviorSubject<IProduct[]> = new BehaviorSubject<IProduct[]>([]);

  constructor(private http: HttpClient) {
    this.http.get<IProduct[]>('/api/cart').subscribe({
      next: (cart) => this.cart.next(cart),
    });
  }

  getCart(): Observable<IProduct[]> {
    return this.cart.asObservable();
  }

  add(product: IProduct) {
    const newCart = [...this.cart.getValue(), product];
    this.cart.next(newCart);
    this.http.post('/api/cart', newCart).subscribe(() => {
      console.log('added ' + product.name + ' to cart!');
    });
  }

  remove(product: IProduct) {
    let newCart = this.cart.getValue().filter((i) => i !== product);
    this.cart.next(newCart);
    this.http.post('/api/cart', newCart).subscribe(() => {
      console.log('removed ' + product.name + ' from cart!');
    });
  }
}





// import { Injectable } from '@angular/core';
// import { IProduct } from '../catalog/product.model';
// import { ILineItem } from '../catalog/line-item.model';

// @Injectable({
//   providedIn: 'root'
// })
// export class CartService {
//   private cart: ILineItem[] = [];

//   constructor() { }

//   getTotalPrice() {
//     return (
//       Math.round(
//         this.cart.reduce<number>((prev, cur) => {
//           return (
//             prev + cur.quantity * (cur.product.price * (1 - cur.product.discount))
//           );
//         }, 0) * 100
//           ) / 100
//     );
//   }

//   findLineItem(product : IProduct) {
//     return this.cart.find((item) => item.product.id === product.id);
//   }

//   add(product: IProduct) {
//     let lineItem = this.findLineItem(product);
//     if (lineItem !== undefined) {
//       lineItem.quantity++;
//     } else {
//       lineItem = { product: product, quantity: 1 };
//       this.cart.push(lineItem);
//     }

//     console.log(`Added ${product.name} to cart`);
//     console.log(`Total price: ${this.getTotalPrice()}`);
//   }
  

//   // cart: IProduct[] = [];  

//   // constructor() { }

//   // add(product: IProduct) {
//   //   this.cart.push(product);
//   //   console.log(`Added ${product.name} to cart`);
//   // }
// }
