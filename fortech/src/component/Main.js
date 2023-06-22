// import Ccommon from './Ccommon';
import './Main.css';
import Slide1 from './Slide1';
// import { useNavigate } from "react-router-dom";

function Main(){
    // let navigate= useNavigate()
    // const handleclick=()=>{
    //     navigate('/slide2')
    // }
    return (
        <div className="main">
            <div 
                // onClick={handleclick}
            >
                <Slide1></Slide1>
                {/* <Ccommon/> */}
            </div>
        </div>
    )
}

export default Main;