import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';
import { DefaultLayoutComponent } from './components/default-layout/default-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { SignupComponent } from './pages/signup/signup.component';

const routes: Routes = [
 
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      {
        path: 'products', loadChildren: () => import('./modules/products/products.module').then(m => m.ProductsModule)
      },
      {
        path: 'categories', loadChildren: () => import('./modules/categories/categories.module').then(m => m.CategoriesModule)
      },
      {
        path: 'users', loadChildren: () => import('./modules/users/users.module').then(m => m.UsersModule)
      },
    ]
  },
  
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      
      {
        path: 'home', component: HomeComponent
      },
    ]
  },
  
  
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'signup', component: SignupComponent
  },
  
  {
    path: '**', component: NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
