import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { deleteFromCart, updateCart} from "./productSlice";



const Products = ()=>{
    const {products, cart} = useSelector((state)=>state.items);
    const dispatch = useDispatch();
   
    

    // console.log(items, "dddd")
    useEffect(()=>{
        //dispatch(fetchFromAPI())        
        
    },[])
    return(
        <div className="container">
            
            <h1 className="fw-light my-5">All Products</h1>
            
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4 mb-5">
                {
                products.map((product, i)=>(
                    
                    <div className="col" key={product.id}>
                        <div className={(product.incart)?"card border-primary":"card"}>
                           <Link to={"/productdetail/"+product.id} className="d-flex  align-items-center justify-content-center"><img src={product.image} className="card-img-top bg-primary-subtle mx-auto my-3" style={{width:'100%', maxWidth:'150px', height:'150px'}} alt={product.titile} /></Link>
                            
                            <div className="card-body">
                                <h5 className="card-title" style={{height:'50px', overflow:'hidden'}}>{product.title}</h5>                                
                                <p className="card-text">Price :<strong>${product.price}</strong></p>
                                {
                                    (product.incart || product.qty>0)?
                                    <>
                                        <div className="btn-group me-2 input-group" style={{width:"120px"}}>
                                            <button type="button" className="btn btn-secondary" onClick={()=>dispatch(updateCart({type:"sub", item:product}))}>-</button>
                                            <input type="text" name={"item"+product.id} value={product.qty} className="form-control" readOnly />
                                            <button type="button" className="btn btn-secondary" onClick={()=>dispatch(updateCart({type:"add", item:product}))}>+</button>
                                        </div>
                                        <button className="btn btn-warning" onClick={()=>dispatch(deleteFromCart({item:product}))}>Remove</button>
                                    </>
                                    :
                                    <button className="btn btn-primary" onClick={()=>dispatch(updateCart({type:"new", item:product}))}>Add to Cart</button> 
                                }
                                
                            </div>

                        </div>
                        

                    </div>
                ))
                
                }
            </div>

        </div>
        
    )    
}

export default Products