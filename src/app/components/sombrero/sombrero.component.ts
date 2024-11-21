import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import data from '../../../../public/data/sombreros.json';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-sombrero',
  standalone: true,
  imports: [],
  templateUrl:'sombrero.component.html'
})
export class SombreroComponent implements OnInit {
  sombreroId:Number = 0;
  sombrerosData = data;
  sombrero:any;
  router: Router = new Router();

  url:ActivatedRoute = inject(ActivatedRoute)

  ngOnInit(): void {
    initFlowbite();
  }
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
