import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ProductdataService } from '../productdata.service';

@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.css']
})
export class ManageProductComponent implements OnInit {

  products=[];
  
  productToUpdate;
  messageStatusHidden=true;
  
  constructor(private product:ProductdataService) {
    this.getProducts();
   }
   getProducts()
   {
     this.product.getAll().subscribe(res=>{
       this.products=res.json().data;
       console.log(this.products);
     })
   }
   deleteProduct(id)
   {
      this.product.delete(id).subscribe(res=>{
        console.log("deleted");
        this.getProducts();
      })
   }
   getProductToUpdate(i)
   {
     console.log(i);
     this.productToUpdate=this.products[i];
     console.log(this.productToUpdate);
   }
   updateProduct(f)
   {
       this.product.update(this.productToUpdate._id,f.value).subscribe(res=>{
         console.log("Update Works");
         this.messageStatusHidden=false;
         this.getProducts();
       })
   }
   productCopy=[]
   
  //  productName=""
   searchByName()
  {
    // this.productCopy=[];
    // for (let i = 0; i <this.products.length; i++) 
    // {
    //   if(this.products[i].name.indexOf(this.products)!=-1)
    //   {
    //     this.productCopy.push(this.products[i]);
    //   }
    // }
    console.log("123");
  }
  ngOnInit() {
  }
  

}
