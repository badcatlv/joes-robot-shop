import { Component, inject } from '@angular/core';
import { IProduct } from './product.model';
import { CartService } from '../cart/cart.service';
import { ProductService } from './product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'bot-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent {
  products: any;
  filter: string = '';

  constructor(
    private cartSvc: CartService,
    private productSvc: ProductService, // Inject the ProductService, which is a service that fetches the product data
    private router: Router, // Inject the Router service, which is used to navigate to different routes
    private route: ActivatedRoute // Inject the ActivatedRoute service, which is used to access the route parameters
  ) { }

  ngOnInit() {
    // Fetch the products from the ProductService, and store them in the products array, which is used to display the products
    this.productSvc.getProducts().subscribe((products) => {
      this.products = products;
    });
    this.route.queryParams.subscribe((params) => {
      this.filter = params['filter'] ?? '';
    }); // Subscribe to the route params, and update the filter property when the filter parameter changes
    //this.filter = this.route.snapshot.params['filter']; // Get the filter parameter from the route, note that this only works when the component is initialized
  }

  addToCart(product: IProduct) {
    this.cartSvc.add(product);
    this.router.navigate(['/cart']); // Navigate to the cart route when a product is added to the cart
  }

  getFilteredProducts() {
    return this.filter === ''
      ? this.products
      : this.products.filter(
        (product: any) => product.category === this.filter
      );
  }
}
