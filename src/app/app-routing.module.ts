import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component'; 
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductsComponent } from './product/product.component.spec';
const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' }, 
  { path: 'products', component: ProductsComponent},
  { path: 'product/:id', component: ProductDetailsComponent }, 
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, 
    { path: 'register', component: RegisterComponent },  
    { path: 'cart', component: CartComponent }, 
    { path: '', redirectTo: '/products', pathMatch: 'full' },
    { path: '**', component: NotFoundComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './cart/cart.component';
import { NotFoundComponent } from './not-found/not-found/not-found.component';

@NgModule({
  declarations: [
    
  ],
  imports: [
    HttpClientModule,
    
  ],
  
})
export class AppModule { }


