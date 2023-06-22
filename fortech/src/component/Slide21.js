import { useNavigate } from "react-router-dom";
import "./Slide21.css";

function Slide21(){
    let navigate= useNavigate()
    const handleclick=()=>{
        navigate('/slide3')
    }
    return (
        <div className="Slide21">
            <div className="main-inner">
                <div className="d-flex">
                    <div className="logo"></div>
                    <div className="col-6 machine2">
                    </div>
                    <div onClick={handleclick} className="col-1 button2">
                        .
                    </div>
                    <div className="col-5 para">
                        <p className="mb-0">Log in with <strong>one finger</strong>,</p>
                        <p>pay with <strong>a tap</strong></p>
                        <div className="line"></div>
                        <div className="fingerprint"></div>
                        <div className="line"></div>
                        <p className="inner-para mt-2">
                            One Touch, the latest version of the Fortech intelligent terminal, also with a fingerprint sensor.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slide21;