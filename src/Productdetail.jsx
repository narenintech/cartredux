import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { updateCart, deleteFromCart, productDetail } from "./productSlice";

const ProductDetail = ()=>{
    const {id} = useParams();

    const [detail, setDetail] = useState({});

    const {products, cart} = useSelector((state)=>state.items);
    
    const dispatch = useDispatch();
    const getItem = ()=>{
        const item = products.find(it=> it.id==id);
        //console.log(products, "iiii");
        setDetail(item);        
    }





    const getProductDetail = async ()=>{
        try{
            const res = await axios.get("https://fakestoreapi.com/products/"+id);
            setDetail(res.data);
            console.log(res.data)

        } catch(error){
            console.error(error)

        }     

    }

    console.log(id, "iddddd");
    
    useEffect(()=>{
        //setTimeout(()=>{getItem()}, 2000)
        (products.length==0)?getProductDetail():getItem()        
        //dispatch(productDetail({id:4}))
        
        
    },[id, products])

    return(
        <div className="container">
            
            <div className="my-5">
                <Link to="/products" className="btn btn-primary">Back to Product</Link>
            </div>
            <div className="row mb-5 g-5">
                <div className="col-md-4 offset-md-1">
                    <div className="d-flex  align-items-center justify-content-center border border-light-subtle rounded-2">
                    <img src={detail.image} className="card-img-top bg-primary-subtle mx-auto my-3" style={{width:'100%', maxWidth:'250px', maxHeight:'320px'}} alt={detail.titile} />
                    </div>
                </div>
                <div className="col-md-6">
                    <h1 className="fw-light mb-4">{detail.title}</h1>
                    <p><strong>Category</strong> - {detail.category}</p>
                    {/* <p><strong>Rating</strong> - <span className="text-warning fw-bold">{detail.rating.rate} ({detail.rating.count}) </span></p> */}
                    <h5 className="mb-3">Price : ${detail.price}</h5>
                    {
                        (detail.incart || detail.qty>0)?
                        <>
                        <div className="btn-group me-2 input-group" style={{width:"120px"}}>
                            <button type="button" className="btn btn-secondary" onClick={()=>dispatch(updateCart({type:"sub", item:detail}))}>-</button>
                            <input type="text" name={"item"+detail.id} value={detail.qty} className="form-control" readOnly />
                            <button type="button" className="btn btn-secondary" onClick={()=>dispatch(updateCart({type:"add", item:detail}))}>+</button>
                        </div>
                        <button className="btn btn-warning" onClick={()=>dispatch(deleteFromCart({item:detail}))}>Remove</button>
                    </>
                    :
                    <button className="btn btn-primary" onClick={()=>dispatch(updateCart({type:"new", item:detail}))}>Add to Cart</button> 
                    }                    
                    
                </div>

            </div>
            <h4 className="mt-3">About this item</h4>
            <p className="mb-5">{detail.description}</p>
        
        </div>
    )
}
export default ProductDetail;