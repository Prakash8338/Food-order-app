import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultState = {
  items: [],
  totalAmount: 0

};



const cartReducer = (state,action) => {
  if(action.type === 'ADD'){

    //const updatedItem = state.items.concat(action.item);



    const totalAm = state.totalAmount + action.item.price*action.item.amount;


    const existingCartIndex = state.items.findIndex((item) => item.id === action.item.id);

    const exisitingItem = state.items[existingCartIndex];

    let updatedItems;

    if(exisitingItem){
      const updateItem = {
        ...exisitingItem,
        amount:exisitingItem.amount + action.item.amount

      };
      updatedItems = [...state.items];
      updatedItems[existingCartIndex] = updateItem;

    }
    else{

      updatedItems = state.items.concat(action.item);

    }

    

    

    return{
      items : updatedItems,
      totalAmount: totalAm

    };

  }

  if(action.type === 'REMOVE'){

    const existingCartIndex = state.items.findIndex((item) => item.id === action.id);

    const exisitingItem = state.items[existingCartIndex];

    const updatedAm = state.totalAmount - exisitingItem.price;

    let updatedItems;
    if(exisitingItem.amount === 1){
      updatedItems = state.items.filter((item)=>item.id !== action.id);
    }
    else{
      const updated = {...exisitingItem, amount: exisitingItem.amount-1};
      updatedItems = [...state.items];
      updatedItems[existingCartIndex] = updated;
    }

    return{
      items : updatedItems,
      totalAmount: updatedAm

    };



      
  }
  return defaultState;
};

const CartProvider = props =>{

  const [cartstate, dispathCartState] = useReducer(cartReducer,defaultState);

  const addItemHandler = item =>{
    dispathCartState({type: 'ADD', item : item});

  };
  const removeItemHandler = id =>{
    dispathCartState({type: 'REMOVE', id : id});

  };

  const cartContext = {
    items : cartstate.items,
    totalAmount : cartstate.totalAmount,
    addItem: addItemHandler,
    removeItem : removeItemHandler

  };

  return(
    <CartContext.Provider value = {cartContext}>
      {props.children}
    </CartContext.Provider>


  );

};

export default CartProvider;