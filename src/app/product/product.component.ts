import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ProductdataService } from '../productdata.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products=[];
  pRating=[1,2,3,4,5,6,7,8,9,10];
  
  constructor(private http:Http,private product:ProductdataService) { 
    this.getProducts();
  }

  ngOnInit() {
  }
  getProducts()
   {
     this.product.getAll().subscribe(res=>{
       this.products=res.json().data;
       console.log(this.products);
     })
   }

}
