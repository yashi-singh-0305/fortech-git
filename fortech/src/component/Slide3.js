import { useNavigate } from "react-router-dom";
import "./Slide3.css";

function Slide3(){
    let navigate= useNavigate()
    const handleclick=()=>{
        navigate('/slide4')
    }
    return (
        <div className="Slide3">
            <div className="main-inner">
                <div className="d-flex">
                    <div className="logo"></div>
                    <div className="col-6 machine3">
                    </div>
                    <div onClick={handleclick} className="col-1 button3">
                        .
                    </div>
                    <div className="col-5 para">
                        <div className="contactless"></div>
                        <p className="mb-0">Innovativo contactless</p>
                        <p><strong>“One Touch”</strong></p>
                        <p className="inner-para mt-2">
                            Equipped with Ingenico's contactless payment system, smartOPT | One Touch allows you to refuel with just one touch on the screen.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slide3;