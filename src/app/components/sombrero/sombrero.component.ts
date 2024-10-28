import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import data from '../../../../public/data/sombreros.json';

@Component({
  selector: 'app-sombrero',
  standalone: true,
  imports: [],
  template: `
    <div class="p-5 d-flex flex-column  alig-items-center justify-content-center">
      <button 
        class="mb-4 btn-volver" 
        (click)="navigateTo('colecciones')"
      >
      <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 volver">
      <path stroke-linecap="round" stroke-linejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
      </svg>
        Volver al catalogo
      </button> 
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

    .volver{
      width: 30px;
    }
    .btn-volver{
      display: flex;
      flex: row;
      gap: 15px;
      font-size: 1rem;
      border:none;
      background: white;
      width:200px;
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
