import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ProductdataService } from '../productdata.service';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private product:ProductdataService) { }
  
  messageStatusHidden=false;

  ngOnInit() {
  }

  addProduct(f)
  {
    this.product.add(f.value).subscribe(res=>{
      res.json();
      console.log(f);
      this.messageStatusHidden=true;
      console.log(this.messageStatusHidden);      
      f.reset();
    });
  } 

}
