


function cartReducer(cartState,action){
    switch(action.type){
        case "Add_item_to_cart":
            return {
                ...cartState,
                cartData:[...cartState.cartData,action.payload]
            }

        case "remove_item":
            return {
                ...cartState,
                cartData:action.payload
            }   

         default: return cartState;    
    }
}
export default cartReducer;
