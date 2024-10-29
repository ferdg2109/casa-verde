import { Component } from '@angular/core';
import data from '../../../../public/data/sombreros.json'
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-colecciones',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div>
      <img [src]="marcas" id="marcas" alt="..."> 
    </div>
   <div class="sombreros-container row  row-cols-md-4 row-cols-lg-4 row-cols-sm-2 gap-5 " >
      @for (sombrero of sombreros.data; track sombrero.id) {
            <div class="card p-0" (click)="navigateToSombreros(sombrero.id)" style="width: 15rem;">
              <img [src]="sombrero.image" id="img" class="card-img-top" alt="...">
              <div class="card-body">
                <p 
                  routerLink="sombreros"
                  class="card-title">{{sombrero.nombre.toUpperCase()}}<br>{{sombrero.subtitle}}
                </p>
              </div>
            </div>
        }  
    </div>
  `,
  styleUrl: './colecciones.component.css'
})
export class ColeccionesComponent {
 sombreros = data;
 router: Router = new Router();

 navigateToSombreros(id:String){
  this.router.navigate(['colecciones',id])
 }

 fondo = 'images/fondo.jpg'
 marcas = 'images/coleccion/marcas.png'
  img1 = 'images/coleccion/1.png'
  img2 = 'images/coleccion/4.png'
  img3 = 'images/coleccion/6.png'
  img4 = 'images/coleccion/7.png'
  img5 = 'images/coleccion/10.png'
  img6 = 'images/coleccion/11.png'
  img7 = 'images/coleccion/18.png'
  img8 = 'images/coleccion/30.png'
  img9 = 'images/coleccion/31.png'
  img10 = 'images/coleccion/34.png'
  img11 = 'images/coleccion/35.png'
  img13 = 'images/coleccion/13.png'
  img14 = 'images/coleccion/14.png'
  img15 = 'images/coleccion/15.png'
  img16 = 'images/coleccion/16.png'
  img17 = 'images/coleccion/36.png'
}
