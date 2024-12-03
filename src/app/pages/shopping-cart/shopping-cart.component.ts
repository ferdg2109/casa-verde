import { Component, inject } from '@angular/core';
import { StorageService } from '../data-access/storage.service';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [],
  templateUrl: './shopping-cart.component.html',
  styles: ``
})
export class ShoppingCartComponent {
  storageService = inject(StorageService);

  productos:any;

  constructor(){
    this.productos = this.storageService.loadProducts();
  }
}
