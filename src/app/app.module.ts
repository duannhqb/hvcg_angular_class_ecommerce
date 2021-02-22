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
import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';
// import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import {StoreDevtools, StoreDevtoolsModule} from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';

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
    DefaultLayoutComponent,
    AdminLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
    }),
    StoreRouterConnectingModule.forRoot({stateKey: 'router'}),
    StoreModule.forRoot({
        router: routerReducer
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
