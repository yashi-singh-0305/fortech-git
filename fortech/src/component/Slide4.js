import { useNavigate } from "react-router-dom";
import "./Slide4.css";

function Slide4(){
    let navigate= useNavigate()
    const handleclick=()=>{
        navigate('/slide5')
    }
    return (
        <div className="Slide4">
            <div className="main-inner">
                <div className="d-flex">
                    <div className="logo"></div>
                    <div className="col-5 para">
                        <div className="cover mb-2"></div>
                        <p className="mb-0">New cover</p>
                        <p><strong>“keyless”</strong></p>
                        <p className="inner-para mt-2">
                            About the new smartOPT | One Touch the printer door key slot is no longer present.
                        </p>
                        <p className="inner-para mt-2">
                            In fact, the new front cover, made up of a single element, is more resistant and aesthetically more linear.
                        </p>
                    </div>
                    <div onClick={handleclick} className="col-1 button4">
                        .
                    </div>
                    <div className="col-6 machine3">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slide4;