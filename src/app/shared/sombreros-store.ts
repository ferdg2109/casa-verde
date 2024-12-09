import { computed, inject } from "@angular/core";
import { patchState, signalStore, withComputed, withMethods, withState } from "@ngrx/signals";
import { SombrerosService } from "../pages/data-access/sombreros.services";
import { rxMethod } from "@ngrx/signals/rxjs-interop";
import { pipe, switchMap, tap } from "rxjs";
import { state } from "@angular/animations";

type SombrerosState = {
    sombreros:any[];
    isLoading:boolean;
    filter: { maxPrice:number, material:string }
};

const initialState: SombrerosState = {
    sombreros: [],
    isLoading: false,
    filter: {maxPrice: 3000, material:''}
}

export const SombrerosStore = signalStore(
    {providedIn:'root'},
    withState(initialState),
    withComputed(({sombreros,filter}) => ({
        sombrerosCount: computed(()=> sombreros().length),
        sombrerosFiltered: computed(()=>{
            return sombreros().filter(sombrero => {
                if(filter.material() === '') return sombrero.precio <= filter.maxPrice();
                else{
                    return sombrero.precio <= filter.maxPrice() &&
                        sombrero.material.toLowerCase() === filter.material().toLowerCase();
                } 
            })
        })
    })),
    withMethods((store, sombrerosService = inject(SombrerosService))=> ({
        loadSombreros:rxMethod<void> (
            pipe(
                tap(()=>patchState(store, {isLoading: true})),
                switchMap(()=>{
                    return sombrerosService.getSombreros().pipe(
                        tap((sombreros:any) => patchState(store, {sombreros, isLoading:false,}))
                    )
                }),
            )
            
        ),
        updatePrice(maxPrice:number){
            patchState(store, (state) => ({filter: {...state.filter, maxPrice}}))
        },
        updateMaterial(material:string){
            patchState(store,(state)=> ({filter: {...state.filter, material}}))
        }
    }))
)