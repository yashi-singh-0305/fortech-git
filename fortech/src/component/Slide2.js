import { useNavigate } from "react-router-dom";
import "./Slide2.css";

function Slide2(){
    let navigate= useNavigate()
    const handleclick=()=>{
        navigate('/slide21')
    }
    return (
        <div className="Slide2">
            <div className="main-inner">
                <div className="d-flex">
                    <div className="col-6 machine2">
                    </div>
                    <div onClick={handleclick} className="col-1 button2">
                        .
                    </div>
                    <div className="col-5 para">
                        <p className="mb-0">Log in with <strong>one finger</strong>,</p>
                        <p>pay with <strong>a tap</strong></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slide2;