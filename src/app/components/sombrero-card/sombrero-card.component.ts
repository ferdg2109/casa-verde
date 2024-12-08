import { Component, inject, input } from '@angular/core';
import { RouterLink,Router } from '@angular/router';
import { StorageService } from '../../pages/data-access/storage.service';
import { CartStore } from '../../shared/cart-store';

@Component({
  selector: 'app-sombrero-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './sombrero-card.component.html',
  styles: ``
})
export class SombreroCardComponent {
  //storageService = inject(StorageService);
  cartStore = inject(CartStore);
  product = input.required<any>();


  router: Router = new Router();

  //initialProducts:[] = [];

  navigateToSombreros(id:String){
   this.router.navigate(['colecciones',id])
  }

  addToCart(product:any){
    const productToAdd = {
      product: product,
      quantity: 1
    }

    this.cartStore.addToCart(productToAdd);
    /*this.initialProducts = this.storageService.loadProducts();

    const products = this.add(productToAdd);

    this.storageService.saveProducts(products);*/
  }

  /*private add(productToAdd:any){
    const isInCart:any = this.initialProducts.find(
      (productInCart:any) => productInCart.product.id === productToAdd.product.id
    );

    if(!isInCart){
      return [...this.initialProducts, {...productToAdd, quantity:1}]
    }

    isInCart.quantity +=1;

    return [...this.initialProducts]
  }*/
}
