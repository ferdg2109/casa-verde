import { Injectable } from "@angular/core";
import { BaseHttpService } from "../../shared/data-access/base-http.service";

@Injectable({
    providedIn:'root'
})
export class UsuariosService extends BaseHttpService {
    login(userCredentials: any){
        return this.http.post(`${this.apiUrl}/login`, userCredentials, {responseType: 'json'});
    }

    register(usuario: any){
        return this.http.post(`${this.apiUrl}/usuario/create`, usuario, {responseType: 'json'});
    }

    update(usuario: any, id:string){
        return this.http.patch(`${this.apiUrl}/usuario/${id}`, usuario, {responseType: 'json'});
    }
}