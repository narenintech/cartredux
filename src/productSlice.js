import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { current} from "@reduxjs/toolkit"

const initialState = {
    products:[],
    cart:[],
    detail:[]
}


// {name:"naren", price:"$20"},{name:"naren", price:"$20"}

const productSlice = createSlice({
    name:"product_slice",
    initialState,
    reducers:{
        setProducts:(state, action)=>{
            state.products=action.payload;            
        },
        productDetail:(state, action)=>{
            const {id} = action.payload;
            
            const detail = state.products.findIndex(ind=>ind.id==id);
            //state.detail = [...detail];
            console.log(detail, ">>>>>>>>>>>>")
        },    
        updateProduct:(state, action)=>{
           // state.products = action.payload;
        //    let {index, product}=action.payload
        //    if(product.incart){
        //     let cp = current(state.cart);
        //     const ind = cp.findIndex(cp=>cp.id===product.id);
        //     let item = cp.at(ind)//cp.filter(cp=>cp.id===product.id);
        //     console.log(item.itemno, "before")
        //     item = {...item, itemno:(item.itemno+1)};
        //     state.cart[ind] = {...item}
        //     //state.cart[ind] = item;
        //     console.log(current(state.cart), "after");
        //    }
           //product.itemno +=1;
            
        },
        addToCart:(state, action)=>{
            //  let {item} = action.payload
            //  item = {...item, qty:1}
            //  state.cart.push(item);
            state.cart.push(action.payload);
            
            //console.log(action.payload, "Cart data")
            
        },
        updateCart:(state, action)=>{
            const {type, item} = action.payload // type, add, sub-
            const pIndex = state.products.findIndex(ind=>ind.id===item.id);
            const cIndex = state.cart.findIndex(ind=>ind.id===item.id);
            //state.cart = action.payload
            if(type==="add") state.cart[cIndex] = {...item, qty:(item.qty+1)}, state.products[pIndex] = {...item, qty:(item.qty+1)}
            if(type==="new") state.cart.push({...item, qty:(item.qty+1), incart:true}), state.products[pIndex] = {...item, qty:(item.qty+1), incart:true}
            if(type==="sub" && item.qty>1) state.cart[cIndex] = {...item, qty:(item.qty-1)}, state.products[pIndex] = {...item, qty:(item.qty-1)}
            //console.log(current(state.cart), "NNNN")
            

        },
        deleteFromCart:(state, action)=>{
            const {item} = action.payload;
            const pIndex = state.products.findIndex(ind=>ind.id===item.id);            
            state.products[pIndex] = {...item, incart:false, qty:0};            
            state.cart = state.cart.filter(ind=>ind.id!==item.id);
            console.log("delete")
        }
    }
})

export const fetchFromAPI=()=>{
    return(dispatch, getState)=>{
        axios.get('https://fakestoreapi.com/products')
        .then(response=>{
            //console.log(response.data);
            const additionaData = response.data.map(item=>({...item, incart:false, qty:0}))
            console.log(additionaData);
            dispatch(setProducts(additionaData))
            //setProducts(dispatch(response.data))
        })
        .catch(error=>{
            console.log(error)
        })
    }


}



export const {setProducts, addToCart, deleteFromCart, updateCart, updateProduct, productDetail} = productSlice.actions
export default productSlice.reducer
