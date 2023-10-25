import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// componentes creados

import { NavbarComponent } from './pages/navbar/navbar.component';
import { Footerr2Component } from './pages/footerr2/footerr2.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { ProductsComponent } from './pages/products/products.component';

const routes: Routes = [

  {path: 'home', component: HomeComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'navbar', component: NavbarComponent},
  {path: 'footer', component: Footerr2Component}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
