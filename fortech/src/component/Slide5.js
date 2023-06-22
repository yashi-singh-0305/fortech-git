import { useNavigate } from "react-router-dom";
import "./Slide5.css";

function Slide5() {
    let navigate = useNavigate()
    const handleclick = () => {
        navigate('/slide6')
    }
    return (
        <div className="Slide5">
            <div className="main-inner">
                <div className="logo"></div>
                <div className="content">
                    <p className="mb-0">Compare models</p>
                    <p>smartOPT</p>
                </div>
                {/* <div onClick={handleclick} className="button5">
                    .
                </div> */}
                <div className="d-flex justify-content-center align-items-end">
                    <div>
                        <p className="text-center text-white">Pro</p>
                        <div className="machine5pro" onClick={handleclick}>
                        </div>
                    </div>
                    <div>
                        <p className="text-center text-white">OneTouch</p>
                        <div className="machine5" onClick={handleclick}>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slide5;