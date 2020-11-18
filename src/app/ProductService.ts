import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable()
export class ProductService {

    private produccts: Product[];

    constructor(public httpClient: HttpClient) {
         this.produccts = 
         [
            { id: '2', name: 'HP', price: 1180, photo: 'image2.jpg' },
            { id: '3', name: 'HP', price: 1180, photo: 'image3.jpg' },
            { id: '4', name: 'HP', price: 1235, photo: 'image4.jpg' },
            { id: '10', name: 'Mac', price: 1248, photo: 'download.jpg' },
            { id: '5', name: 'Lenovo', price: 1100, photo: 'image5.jpg' },
            { id: '6', name: 'Mac', price: 1248, photo: 'image6.jpg' }
        ];
    }

    findAll(): Observable<Product[]> {
        return this.httpClient.get<Product[]>("http://localhost:5000/api/users/findProducts");
    }

    storeProductDetailsInDb(prodRef): Observable<any> {
        return this.httpClient.post("http://localhost:5000/api/users/StoreProductInfo", prodRef);
        //subscribe(result=>console.log(result),err=>console.log(err));
    }

    updateProductDetailsInDb(prodRef): Observable<any> {
        return this.httpClient.post("http://localhost:5000/api/users/UpdateProductInfo", prodRef);
        //subscribe(result=>console.log(result),err=>console.log(err));
    }

    deleteProductById(prodId):Observable<any>{
        return this.httpClient.delete("http://localhost:5000/api/users/DeleteProduct/"+prodId);
      }

    find(id: string): Product {
        return this.produccts[this.getSelectedIndex(id)];
    }

    private getSelectedIndex(id: string) {
        for (var i = 0; i < this.produccts.length; i++) {
            if (this.produccts[i].id === id) {
                return i;
            }
        }
        return -1;
    }

}