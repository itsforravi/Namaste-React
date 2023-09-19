import {createSlice, current} from "@reduxjs/toolkit"

const cartSlice=createSlice({

name:'cart',
initialState:{
    item:[]

},
reducers: {
addItem:(state,action)=>{
    //mutating the state here 
    //vanialla(older)redux => Don't MUtate state , returning was mandatory
// const newState=[...state];
// newState.items.push(action.payload);
// return newState;

//Redux Toolkit uses immer BTS
//We have to mutate the state

state.items.push(action.payload);


},
removeItem:(state)=>{
    state.items.pop();
},

//originalState={items:["pizza"]}
clearCart:(state)=>{
//     console.log(state);
//     console.log(current(state));
//    state=[];
//    console.log(state);

//RTX-either Mutate the existing state or return a new state

    state.items.length=0;//originalState={items : []}

    return {items : []}; //this new[] will be replace inside originalState={items : []}
},
},
});



export const{addItem,removeItem,clearCart}=cartSlice.actions;


export default cartSlice.reducer;