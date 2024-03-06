import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value:1,
  cart:[],
  quantity:1,
  price:0,
  discount:0,
  total:0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addcart:(state, action)=>{
      let find = state.cart.findIndex((item)=> item.id === action.payload.id)
      if(find >= 0){
        state.cart = state.cart.map((item,index)=>
          index === find
          ?{...item, quantity:item.quantity + 1}
          :item
        )
      }
      else{
          state.cart.push({...action.payload, quantity: 1});
      }
      state.price += Math.floor(action.payload.price*action.payload.discountPercentage/100+action.payload.price);
      state.discount += Math.floor(action.payload.price*action.payload.discountPercentage/100);
      state.total += action.payload.price ;
      
    },
    remove:(state, action)=>{
      state.cart = state.cart.filter((item)=> item.id !== action.payload.id)
      state.quantity -=1;
      const rprice= Math.floor(action.payload.price*action.payload.discountPercentage/100+action.payload.price);
      const rdiscount =Math.floor(action.payload.price*action.payload.discountPercentage/100)
      console.log(rprice);
      state.price -= rprice;
      state.discount -= rdiscount;
      state.total -= action.payload.price;
      
    },
    decrement:(state, action)=> {
      const item = state.cart.find((item)=> item.id === action.payload);
      const rdiscount =Math.floor(action.payload.price*action.payload.discountPercentage/100)
      if(item && item.quantity > 1){
        item.quantity -=1;
        state.discount -= rdiscount;
        state.total -= action.payload.price
      }
    },
    increment:(state, action)=>{
      const item = state.cart.find((item)=> item.id === action.payload);
      const rdiscount =Math.floor(action.payload.price*action.payload.discountPercentage/100)
      if(item) {
        item.quantity+=1;
        state.discount += rdiscount;
        state.total += action.payload.price;
      }
      
    }
  },
})

export const {addcart, remove, increment, decrement} = counterSlice.actions

export default counterSlice.reducer