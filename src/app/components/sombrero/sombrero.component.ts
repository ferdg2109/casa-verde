import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import data from '../../../../public/data/sombreros.json';

@Component({
  selector: 'app-sombrero',
  standalone: true,
  imports: [],
  templateUrl:'sombrero.component.html'
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
