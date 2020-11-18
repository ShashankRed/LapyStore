import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductService } from '../ProductService';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  productRef = new FormGroup({

    _id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    photo: new FormControl(),
    brand: new FormControl()

  });

  constructor(public productService: ProductService) { }

  result: string;
  buttonType: string;

  ngOnInit(): void {
  }

  onSubmit(buttonType): void {
    if (buttonType === "Next") {
      this.productService.storeProductDetailsInDb(this.productRef.value).
        subscribe(data => this.result = data.msg);

    }
    if (buttonType === "Previous") {
      this.productService.updateProductDetailsInDb(this.productRef.value).
        subscribe(data => this.result = data.msg);
    }

  }

  deleteProduct(prodId) {
    if(prodId == ""){
      this.result="Please enter the product ID";
      return;
    }
    this.productService.deleteProductById(prodId).subscribe(data => this.result = data.msg);
  }



}



// storeProductDetails(): void {
  //   this.productService.storeProductDetailsInDb(this.productRef.value).
  //     subscribe(data => this.result = data.msg);
  // }

  // updateProductDetails(): void {
  //   alert("hello");
  //   console.log("COMGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG");
  //   // this.productService.storeProductDetailsInDb(this.productRef.value).
  //   // subscribe(data=>this.result=data.msg);
  // }