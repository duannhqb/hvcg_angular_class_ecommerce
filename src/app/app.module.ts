import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BorderColorDirective } from './border-color.directive';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { UserDetailComponent } from './modules/users/user-detail/user-detail.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DefaultLayoutComponent } from './components/default-layout/default-layout.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './store/reducers/counter.reducer';
import { productReducer } from './store/reducers/product.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './store/effects/product.effects';
// import { ProductDetailComponent } from './pages/product-detail/product-detail.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BorderColorDirective,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    UserDetailComponent,
    NotfoundComponent,
    DefaultLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    EffectsModule.forRoot([ProductEffects]),
    StoreModule.forRoot({
        productReducer: productReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
    console.log('AppModule workss');
    
  }
}

// clean architecture

// data
// domain
// presentation
// angular, react, vuejs, 
// DOM, State Management
// Single Source of Truth.
// function getAA(){
//   return 9090
// }

// function getVal(x:number, y: number){
//   return x+Math.random()*5+y+Math.random()*5;

// }

// let rs = getVal(4, 8);

// ko bi phu thuoc boi yeu to ben ngoai