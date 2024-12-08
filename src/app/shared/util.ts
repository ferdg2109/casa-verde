export default function add (store:any,productToAdd:any)  {
    const isInCart:any = store.products().find(
        (productInCart:any) => productInCart.product.id === productToAdd.product.id
    );

    if(!isInCart){
        return [...store.products(),{...productToAdd,quantity:1}]
    }

    isInCart.quantity += 1;

    return[...store.products()]
}

export function remove(store:any,id:any){
    return store.products().filter((product:any) => product.product.id !== id);
}