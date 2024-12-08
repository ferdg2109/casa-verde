import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { SombrerosService } from '../../pages/data-access/sombreros.services';
import { CartStore } from '../../shared/cart-store';

@Component({
  selector: 'app-sombrero',
  standalone: true,
  imports: [],
  templateUrl:'sombrero.component.html'
})
export class SombreroComponent implements OnInit {
  cartStore = inject(CartStore);

  sombreroId:string;
  sombrero:any;
  router: Router = new Router();

  url:ActivatedRoute = inject(ActivatedRoute)

  ngOnInit(): void {
    initFlowbite();
  }
  constructor(private sombrerosServices: SombrerosService){
    this.sombreroId = this.url.snapshot.params['id'];

    this.sombrerosServices.getSombrero(this.sombreroId).subscribe(data => {
      this.sombrero = data;
    });

    console.log(this.sombreroId)
    console.log(this.sombrero)
  }

  addToCart(sombrero:any){
    const productToAdd = {
      product: sombrero,
      quantity: 1
    }
    this.cartStore.addToCart(productToAdd);
  }

  navigateTo(ruta:String){
    this.router.navigate([ruta]);
  }
}
