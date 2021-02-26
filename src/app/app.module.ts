import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top/top-bar/top-bar.component';
import { NavComponent } from './top/nav/nav.component';
import { BottomBarComponent } from './top/bottom-bar/bottom-bar.component';
import { MainBannerComponent } from './body/main-banner/main-banner.component';
import { NavbarComponent } from './top/navbar/navbar.component';
import { BannerComponent } from './body/banner/banner.component';
import { BrandComponent } from './body/brand/brand.component';
import { FeatureComponent } from './body/feature/feature.component';
import { CategoryComponent } from './body/category/category.component';
import { CallToActionComponent } from './body/call-to-action/call-to-action.component';
import { FeaturedProductComponent } from './body/featured-product/featured-product.component';
import { NewsletterComponent } from './body/newsletter/newsletter.component';
import { RecentProductComponent } from './body/recent-product/recent-product.component';
import { ReviewComponent } from './body/review/review.component';
import { FooterComponent } from './bottom/footer/footer.component';
import { FooterBottomComponent } from './bottom/footer-bottom/footer-bottom.component';
import { BestSellingComponent } from './body/best-selling/best-selling.component';
import { NewArrivalsComponent } from './body/new-arrivals/new-arrivals.component';
import { ProductsComponent } from './body/products/products.component';
import { ProductDetailComponent } from './body/product-detail/product-detail.component';
import { CartComponent } from './body/cart/cart.component';
import { WishListComponent } from './body/wish-list/wish-list.component';
import { MyaccountComponent } from './body/myaccount/myaccount.component';
import { LoginComponent } from './body/login/login.component';
import { RegisterComponent } from './body/register/register.component';
import { SearchComponent } from './body/search/search.component';
import { MainTopComponent } from './top/main-top/main-top.component';
import { MainBodyComponent } from './body/main-body/main-body.component';
import { MainFooterComponent } from './bottom/main-footer/main-footer.component';
import { HomeComponent } from './body/home/home.component';
import { CheckoutComponent } from './body/checkout/checkout.component';
import { BreadcrumbComponent } from './body/breadcrumb/breadcrumb.component';
import { SidebarComponent } from './body/sidebar/sidebar.component';
import { SidebarCatComponent } from './body/sidebar-cat/sidebar-cat.component';
import { SidebarSliderComponent } from './body/sidebar-slider/sidebar-slider.component';
import { SidebarBrandsComponent } from './body/sidebar-brands/sidebar-brands.component';
import { SidebarTagComponent } from './body/sidebar-tag/sidebar-tag.component';
import { ContactusComponent } from './body/contactus/contactus.component';
import { TopComponent } from './top/top.component';
import { BodyComponent } from './body/body.component';
import { BottomComponent } from './bottom/bottom.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    NavComponent,
    BottomBarComponent,
    MainBannerComponent,
    NavbarComponent,
    BannerComponent,
    BrandComponent,
    FeatureComponent,
    CategoryComponent,
    CallToActionComponent,
    FeaturedProductComponent,
    NewsletterComponent,
    RecentProductComponent,
    ReviewComponent,
    FooterComponent,
    FooterBottomComponent,
    BestSellingComponent,
    NewArrivalsComponent,
    ProductsComponent,
    ProductDetailComponent,
    CartComponent,
    WishListComponent,
    MyaccountComponent,
    LoginComponent,
    RegisterComponent,
    SearchComponent,
    MainTopComponent,
    MainBodyComponent,
    MainFooterComponent,
    HomeComponent,
    CheckoutComponent,
    BreadcrumbComponent,
    SidebarComponent,
    SidebarCatComponent,
    SidebarSliderComponent,
    SidebarBrandsComponent,
    SidebarTagComponent,
    ContactusComponent,
    TopComponent,
    BodyComponent,
    BottomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
