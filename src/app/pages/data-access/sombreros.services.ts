import { Injectable } from "@angular/core";
import { BaseHttpService } from "../../shared/data-access/base-http.service";

@Injectable({providedIn: 'root'})
export class SombrerosService extends BaseHttpService{
    getSombreros(){
        return this.http.get(`${this.apiUrl}/sombreros`,{
            responseType:'json'
        });
    }

    getSombrero(id: string){
        return this.http.get(`${this.apiUrl}/sombreros/${id}`,{
            responseType: 'json'
        });
    }
}