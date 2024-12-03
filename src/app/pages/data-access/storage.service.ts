import { Injectable } from "@angular/core";

@Injectable({providedIn:'root'})
export class StorageService{
    loadProducts(){
        const products = localStorage.getItem('products');

        return products ? JSON.parse(products) : [];
    }

    saveProducts(products:any){
        localStorage.setItem('products', JSON.stringify(products));
    }
}