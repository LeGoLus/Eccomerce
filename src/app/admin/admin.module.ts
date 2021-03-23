import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminsComponent } from './admins/admins/admins.component';
import { AdminAdeditComponent } from './admins/admin-adedit/admin-adedit.component';
import { ProductsComponent } from './products/products/products.component';
import { ProductAdeditComponent } from './products/product-adedit/product-adedit.component';
import { BannersComponent } from './banners/banners/banners.component';
import { BannerAdeditComponent } from './banners/banner-adedit/banner-adedit.component';
import { UsersComponent } from './users/users/users.component';
import { UserAdeditComponent } from './users/user-adedit/user-adedit.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound/pagenotfound.component';
import { LoginComponent } from './login/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../share/material-module';


@NgModule({
  declarations: [
    DashboardComponent,
    BannersComponent,
    BannerAdeditComponent,
    ProductsComponent,
    ProductAdeditComponent,
    UsersComponent,
    UserAdeditComponent,
    AdminsComponent,
    AdminAdeditComponent,
    PagenotfoundComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
  ]
})
export class AdminModule { }
