import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CartComponent } from './cart/cart.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { TemplateFormControlsComponent } from './user/template-form-controls/template-form-controls.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, title: "Home - Joe's Robot shop" }, //path: 'home' is the URL path that will trigger the HomeComponent to be displayed
  { path: 'catalog', component: CatalogComponent, title: "Catalog - Joe's Robot shop" },
  { path: 'cart', component: CartComponent, title: "Cart - Joe's Robot shop" }, // Add a route for the CartComponent, etc.
  { path: 'sign-in', component: SignInComponent},
  { path: 'form-controls', component: TemplateFormControlsComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect the root URL to the home route
  //order of routes is important, the first match is the one that is used, so the wildcard route should be the last one

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
