import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const Header =()=>{
    const cart = useSelector((state)=>state.items.cart);
    
    
    return(
        <div className='container-fluid p-0'>
            <header className='bg-light p-3'>
                <div className='container'>
                <div className="d-flex flex-wrap justify-content-center">
                    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                    
                    <span className="fs-4">Redux</span>
                    </a>
                    <ul className="nav nav-pills">
                    <li className="nav-item"> <Link to="/" className="nav-link">Home</Link> </li>
                    <li className="nav-item"> <Link to="/products" className="nav-link">Products</Link></li>
                    <li className="nav-item"> <Link to="/cart" className="nav-link active position-relative">Cart <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>{cart.length>0?cart.length:"" }</span></Link></li>
                    </ul>
                </div>
                </div>        
            </header>
        </div>
    )
}

export default Header;