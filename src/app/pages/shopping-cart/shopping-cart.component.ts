import { Component, inject } from '@angular/core';
import { StorageService } from '../data-access/storage.service';
import { CartStore } from '../../shared/cart-store';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './shopping-cart.component.html',
  styles: ``
})
export class ShoppingCartComponent {
  storeCart = inject(CartStore);
  /*storageService = inject(StorageService);

  productos:any;*/

  constructor(){
    this.storeCart.loadProducts();
    //this.productos = this.storageService.loadProducts();
  }

  removeOfCart(producto:any){
    this.storeCart.removeOfCart(producto);
    //const newProducts = this.remove(producto.id);
    /*this.storageService.saveProducts(newProducts);
    this.storageService.loadProducts();*/
  }

  /*private remove(id:any){
    return this.productos.filter((product:any) => product.product.id !== id);
  }*/
}
