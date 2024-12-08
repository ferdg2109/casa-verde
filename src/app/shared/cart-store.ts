import { inject } from "@angular/core";
import { patchState, signalStore, withMethods, withState } from "@ngrx/signals";
import { StorageService } from "../pages/data-access/storage.service";
import add, { remove } from "./util";

type CartState = {
    products:any[];
}

const initialState: CartState = {
    products: [],
}


export const CartStore = signalStore(
    {providedIn:'root'},
    withState(initialState),
    withMethods((store, storageService = inject(StorageService)) => ({
        loadProducts(){
            const initialProducts:any[] = storageService.loadProducts();
            patchState(store, {products:initialProducts});
        },
        addToCart(productToAdd:any){
            const newProducts = add(store,productToAdd);
            patchState(store, {products: newProducts});

            storageService.saveProducts(newProducts);
           
        },
        removeOfCart(producto:any){
            const newProducts = remove(store,producto.id);
            patchState(store, {products:newProducts});
            storageService.saveProducts(newProducts);
        }
    }))  
);


