import {createSlice} from "@reduxjs/toolkit"

const cartSlice=createSlice({

name:'cart',
initialState:{
    item:[]

},
reducers: {
addItem:(state,action)=>{
    //mutating the state here 
    //vanialla(older)redux => Don't MUtate state
// const newState=[...state];
// newState.items.push(action.payload);
// return newState;

//Redux Toolkit
//We have to mutate the state

state.items.push(action.payload);

},
removeItem:(state)=>{
    state.items.pop();
},
clearCart:(state)=>{
    state.items.length=0;
},
}
});



export const{addItem,removeItem,clearCart}=cartSlice.actions;


export default cartSlice.reducer;