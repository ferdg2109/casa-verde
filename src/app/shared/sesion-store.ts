import { patchState, signalStore, withMethods, withState } from "@ngrx/signals";

type SesionState = {
    user:any;
    isAuth: boolean;
}

const initialState: SesionState = {
    user: {},
    isAuth: false
}

export const SesionStore = signalStore(
    {providedIn:'root'},
    withState(initialState),
    withMethods((store) => ({
        loadUser(data:any){
            patchState(store,{user:data, isAuth:true});
        },
        removeUser() {
            patchState(store, {user:{}, isAuth:false});
        }
    }))
)