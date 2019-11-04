import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ManageProductComponent } from './manage-product/manage-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpModule } from '@angular/http';
import { ProductdataService } from './productdata.service';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ManageProductComponent,
    ViewProductComponent,
    AddProductComponent,
    NotFoundComponent,
    LoginComponent,
   
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path:"",component:ViewProductComponent},
      {path:"product",component:ProductComponent},
      {path:"product/manage",component:ManageProductComponent},
      {path:"product/login",component:LoginComponent},
      {path:"product/addproduct",component:AddProductComponent},
      {path:"product/:id",component:ViewProductComponent},
      {path:"**",component:NotFoundComponent},
      
    ]),
    HttpModule
  ],
  
  providers: [ProductdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
