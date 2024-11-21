import { Component } from '@angular/core';
import data from '../../../../public/data/sombreros.json'
import { SombreroCardComponent } from '../../components/sombrero-card/sombrero-card.component';

@Component({
  selector: 'app-colecciones',
  standalone: true,
  imports: [ SombreroCardComponent],
  templateUrl:'./colecciones.component.html',
  styleUrl: './colecciones.component.css'
})
export class ColeccionesComponent {
 sombreros = data;


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
