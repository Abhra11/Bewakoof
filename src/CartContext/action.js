
export const addItem=(item)=>({type:'Add_item_to_cart',payload:item});
export const removeItem=(removeData)=>({type:'remove_item', payload:removeData});
export const orderPlaced={type:'order_placed'};