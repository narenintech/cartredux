// import { useEffect } from "react";
// import { useSelector, useDispatch, getState } from "react-redux";
// import { fetchFromAPI } from "./productSlice";

const Home=()=>{
    
    return(
        <>
        
        <section className="my-3 text-center container bg-primary-subtle rounded">
            <div className="row py-lg-5">
                <div className="col-md-8 mx-auto">
                    <h1 className="fw-light">Redux Example</h1>
                    <p>Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
                    <p>
                        <a href="" className="btn btn-primary my-2">Call to Action Primary</a>
                        <a href="" className="btn btn-secondary my-2 mx-2">Call to Action Secondary</a>
                    </p>
                </div>
            </div>

        </section>

        
        </>
    )
}

export default Home;