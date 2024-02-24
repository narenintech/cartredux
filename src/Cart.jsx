import { useSelector, useDispatch} from "react-redux"
import { deleteFromCart, updateCart } from "./productSlice";
import { useEffect, useState } from "react";

const Cart =()=>{
    const {products, cart} = useSelector((state)=>state.items);
    const dispatch = useDispatch();
    let items = [...products]
    const [totalPrice, setTotalPrice] = useState();


    const priceHandle = ()=>{
        let p = 0;        
        const price = cart.map(item=>{
            p = (p+item.qty*item.price)
            //return totalPrice*1+item.price*1
        })
        p=p-5;
        //console.log();
        setTotalPrice(p.toFixed(2));
    }
    useEffect(()=>{
        priceHandle()
    }, [cart])
    return(
        <div className="container">
            <h1 className="fw-light my-5">Cart Detail</h1>


            <div className="row g-5">
                <div className="col-md-5 order-md-last">
                    <h4 className="d-flex justify-content-between align-items-center mb-3">
                    <span className="text-primary">Your cart</span>
                    <span className="badge bg-primary rounded-pill">{cart.length}</span>
                    </h4>
                    <ul className="list-group mb-3">
                    {
                        cart.map((cartitem)=>(
                    <li className="list-group-item d-flex justify-content-between lh-sm" key={cartitem.id}>
                        <div>
                        <h6 className="my-0">{cartitem.title}</h6>
                        <small className="text-muted">{cartitem.qty+"x"+cartitem.price}</small>
                        </div>
                        <span className="text-muted">{cartitem.qty*cartitem.price}</span>
                        
                    </li>
                        ))}
                    {/* <li className="list-group-item d-flex justify-content-between lh-sm">
                        <div>
                        <h6 className="my-0">Second product</h6>
                        <small className="text-muted">Brief description</small>
                        </div>
                        <span className="text-muted">$8</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between lh-sm">
                        <div>
                        <h6 className="my-0">Third item</h6>
                        <small className="text-muted">Brief description</small>
                        </div>
                        <span className="text-muted">$5</span>
                    </li> */}
                    <li className="list-group-item d-flex justify-content-between bg-light">
                        <div className="text-success">
                        <h6 className="my-0">Promo code</h6>
                        <small>EXAMPLECODE</small>
                        </div>
                        <span className="text-success">-$5</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span>Total (USD)</span>
                        <strong>${totalPrice}</strong>
                    </li>
                    </ul>
                    {/* <form className="card p-2">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Promo code" fdprocessedid="uirxai" />
                        <button type="submit" className="btn btn-secondary" fdprocessedid="wdrv27">Redeem</button>
                    </div>
                    </form> */}
                </div>
                <div className="col-md-7">
                    
                {
                        cart.map((cartitem)=>(
                        
                    <div className="card mb-3" key={cartitem.id}>
                        <div className="row g-0">
                        <div className="col-md-3 p-4">
                            <img src={cartitem.image} className="img-fluid rounded-start" style={{height:"60px"}} alt={cartitem.title} />
                        </div>
                        <div className="col-md-9">
                            <div className="card-body">
                            <h5 className="card-title">{cartitem.title}</h5>
                            
                            <div className="btn-toolbar mb-3">
                                <div className="inline-block me-3">
                                    <h5 className="" style={{lineHeight:"35px"}}>Price: {cartitem.price}</h5>
                                </div>
                                <div className="btn-group me-2 input-group" style={{width:"120px"}}>
                                    <button type="button" className="btn btn-secondary" onClick={()=>dispatch(updateCart({type:"sub", item:cartitem}))}>-</button>
                                    <input type="text" name={"item"+cartitem.id} value={cartitem.qty} className="form-control" readOnly />
                                    <button type="button" className="btn btn-secondary" onClick={()=>dispatch(updateCart({type:"add", item:cartitem}))}>+</button>
                                </div>
                                
                                <button className="btn btn-danger" onClick={()=>dispatch(deleteFromCart({item:cartitem}))}>Remove</button>
                                
                            </div>
                            
                            {/* <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                             <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p> */}
                            
                            </div>
                        </div>
                        </div>
                    </div>
                    ))
                }
                    </div>
                    </div>


                

            

        </div>
    )    
}

export default Cart