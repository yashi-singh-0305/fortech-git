import { useNavigate } from "react-router-dom";
import './Slide1.css'

function Slide1(){
    let navigate= useNavigate()
    const handleclick=()=>{
        navigate('/slide2')
    }
    return (
        <div className="slide1">
            <div className="main-inner" 
            // onClick={handleclick}
            >
                <div className="row m-0 navbar">
                    <div className="col-3 logo bg-img"></div>
                    <div className="col-2"></div>
                    <div className="col-1 text-white">About Us</div>
                    <div className="col-1 text-white">Services</div>
                    <div className="col-1 text-white">Product</div>
                    <div className="col-2 premium bg-img"></div>
                    <div className="col-1 language bg-img"></div>
                </div>
                <div className="mt-3">
                    <p className="text-center smartOPT mb-0"><strong>smartOPT </strong>| One Touch</p>
                    <div className="bell"></div>
                    <p className="text-center text-secondary mb-0">Scroll till the end</p>
                </div>
                <div className="machine">
                </div>
                <div onClick={handleclick} className="arrow">
                </div>
            </div>
        </div>
    )
}

export default Slide1;