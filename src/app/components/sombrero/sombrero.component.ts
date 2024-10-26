import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import data from '../../../../public/data/sombreros.json';

@Component({
  selector: 'app-sombrero',
  standalone: true,
  imports: [],
  template: `
    <div class="p-5 d-flex flex-column m-auto alig-items-center justify-content-center">
      <button class="mb-2" (click)="navigateTo('colecciones')">Volver</button> 
      <div class="d-flex flex-row gap-5 alig-items-center justify-content-center">
         <div>
           <img src={{sombrero.image}} alt={{sombrero.nombre}}>
         </div>
         <div class="d-flex flex-column gap-2">
             <h1>{{sombrero.nombre}}</h1>
             <h1>$ {{sombrero.precio}}</h1>
             <button>Comprar</button>
             <h2>Descripcion del producto</h2>
             <h3>Calidad: {{sombrero.calidad}}</h3>
             <h3>Material: {{sombrero.material}}</h3>
             <h2>Medidas</h2>
             <h3>Tamano del ala: {{sombrero.ala}} cm</h3>
             <h3>Tamano copa: {{sombrero.copa}} cm</h3>
         </div>
       </div> 
    </div>
    
  `,
  styles: `
    img{
      width: 500px;
    }
  `
})
export class SombreroComponent {
  sombreroId:Number = 0;
  sombrerosData = data;
  sombrero:any;
  router: Router = new Router();

  url:ActivatedRoute = inject(ActivatedRoute)

  constructor(){
    this.sombreroId = this.url.snapshot.params['id'];
    [this.sombrero] = this.sombrerosData.data.filter(sombrero => sombrero.id === this.sombreroId.toString())
    console.log(this.sombreroId)
    console.log(this.sombrero)
  }

  navigateTo(ruta:String){
    this.router.navigate([ruta]);
  }
}
