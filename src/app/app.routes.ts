import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Contact } from './components/contact/contact';
import { NoPage } from './components/no-page/no-page';
import { Products } from './components/products/products';
import { MainComponent } from './components/main-component/main-component';
import { ProductDetails } from './components/product-details/product-details';
import { HomeLayout } from './components/home-layout/home-layout';
import { TemplateDrivenForm } from './components/template-driven-form/template-driven-form';
import { ReactiveForm } from './components/reactive-form/reactive-form';
import { authGuard } from './Guards/auth-guard';
import { AddProduct } from './components/add-product/add-product';

export const routes: Routes = [
//routing  step1: add paths in rouets.ts
//default
// {path:'',redirectTo:"home" , pathMatch:"full"},
//     {path:'home' , component:Home , title:"Home"},
//     {path:'about', component:About,title : "About Us"},
//         {path:'products', component:Products,title : "Products"},

//   {path:'contact', component:Contact,title : "Contact Us"},
//wildcard
//   {path:'**',component:NoPage,title:"Not Found"},

  {path:'',component:MainComponent, children:[
    {path:'',redirectTo:"home" , pathMatch:"full"},
    // {path:'home' , component:Home , title:"Home"},
 {
        path: 'home',
        component: HomeLayout, //Home & Sidebar
        children: [
          { path: '', component: Home, title: "Home" }
        ]
      },
    {path:'about', component:About,title : "About Us"},
        {path:'products', component:Products,title : "Products",canActivate:[authGuard]},
       {path:'addproduct', component:AddProduct,title : "Add New Product"},


  {path:'contact', component:Contact,title : "Contact Us"},
  {path:'products/:idFromUrl' , component:ProductDetails ,title:"Products Details" ,canActivate:[authGuard]},
  // {path:'signup',component:TemplateDrivenForm}
    {path:'signup',component:ReactiveForm
    }

  ]},
  {path:'**',component:NoPage,title:"Not Found"}
];
