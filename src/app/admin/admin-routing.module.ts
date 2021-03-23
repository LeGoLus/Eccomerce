import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAdeditComponent } from './admins/admin-adedit/admin-adedit.component';
import { AdminsComponent } from './admins/admins/admins.component';
import { BannerAdeditComponent } from './banners/banner-adedit/banner-adedit.component';
import { BannersComponent } from './banners/banners/banners.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { LoginComponent } from './login/login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound/pagenotfound.component';
import { ProductAdeditComponent } from './products/product-adedit/product-adedit.component';
import { ProductsComponent } from './products/products/products.component';
import { UserAdeditComponent } from './users/user-adedit/user-adedit.component';
import { UsersComponent } from './users/users/users.component';

const routes: Routes = [
  { path: '', component: DashboardComponent},
  { path: 'login', component: LoginComponent},

  { path: 'admins', component: AdminAdeditComponent },
  { path: 'admin-adedit/:slug', component: AdminsComponent },

  { path: 'banners', component: BannersComponent },
  { path: 'banner-adedit/:slug', component: BannerAdeditComponent },

  { path: 'products', component: ProductsComponent },
  { path: 'product-adedit/:slug', component: ProductAdeditComponent },

  { path: 'users', component: UsersComponent },
  { path: 'user-adedit/:slug', component: UserAdeditComponent },

  { path: '**', component: PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
