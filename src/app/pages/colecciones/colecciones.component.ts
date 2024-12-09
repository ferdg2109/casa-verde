import { Component, computed, inject, input, OnInit, signal } from '@angular/core';
import { SombreroCardComponent } from '../../components/sombrero-card/sombrero-card.component';
import { SombrerosService } from '../data-access/sombreros.services';
import { SombrerosStore } from '../../shared/sombreros-store';
import { initFlowbite } from 'flowbite';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-colecciones',
  standalone: true,
  imports: [ SombreroCardComponent, FormsModule],
  templateUrl:'./colecciones.component.html',
  styleUrl: './colecciones.component.css'
})
export class ColeccionesComponent implements OnInit {
  sombrerosStore = inject(SombrerosStore);
  //sombreros:any;
  valor=3000;
  material = '';

 constructor(private sombrerosService:SombrerosService){
  this.sombrerosStore.loadSombreros();
 }

 ngOnInit(): void{
 /* this.sombrerosService.getSombreros().subscribe(data => {
    this.sombreros = data;
    console.log(data)
  })*/
  initFlowbite();
 }

 onChange(){
  this.sombrerosStore.updatePrice(this.valor);
 }

 onChangeMaterial(){
  this.sombrerosStore.updateMaterial(this.material);
  console.log(this.material)
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
