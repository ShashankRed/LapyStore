import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { Product } from '../product';
import { ProductService } from '../ProductService';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[];
  i:number;
  constructor(
    private productService: ProductService, public auth:AuthService, private router:Router
  ) { }

  ngOnInit() {

    console.log(this.productService.findAll())
    this.productService.findAll().subscribe(data=>this.products=data)
    
    }
		
  

}
