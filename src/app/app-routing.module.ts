import { ContactusComponent } from './body/contactus/contactus.component';
import { LoginComponent } from './body/login/login.component';
import { WishListComponent } from './body/wish-list/wish-list.component';
import { CheckoutComponent } from './body/checkout/checkout.component';
import { MyaccountComponent } from './body/myaccount/myaccount.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './body/cart/cart.component';
import { HomeComponent } from './body/home/home.component';
import { ProductDetailComponent } from './body/product-detail/product-detail.component';
import { ProductsComponent } from './body/products/products.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'product-detail/:slug', component: ProductDetailComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'my-account', component: MyaccountComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'wishlist', component: WishListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'contactus', component: ContactusComponent},
  { path: '**', component: HomeComponent } // If no matching route found, go back to home route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
