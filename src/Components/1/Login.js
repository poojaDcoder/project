import React from "react";
import {IoIosPerson} from "react-icons/io";
import {SlLock} from "react-icons/sl";
import {FaFileSignature} from"react-icons/fa";
import "./login.css";

export const Login = ()=>{
    // const[sign, setSign] = useState("");
    // const[pass, setPass] = useState("");

return(
        <div className="loginbody" >
            <form>
                
                <header style={{backgroundColor:"rgb(175, 31, 31)",color:"white",height:"35px",borderTopLeftRadius:"8px",borderTopRightRadius:"8px",textAlign:"center",fontFamily:"revert"}}> <FaFileSignature size="14px"></FaFileSignature>ELECTRONIC SIGNATURE</header>
                <h1 className="logo" >Project Demo</h1>
                <br />
                
                <label for = "sign"></label>
                <IoIosPerson color="rgb(109, 107, 107)" size="18px"></IoIosPerson>
                <input  placeholder="Username" id="sign" name="sign"></input>
                <br></br>
                <br />
                <label for = "password"></label>
                <SlLock color="rgb(109, 107, 107)" size="18px"></SlLock>
                <input  type="password" placeholder="*********" id="password" name="password"/>
                <br />
                <h4 style={{fontSize:"10px",color:"rgb(146, 138, 138)"}}>I Approve the Record(s)</h4>
                <br />
                <button style={{backgroundColor:"rgb(248, 31, 31)",color:"white",width:"110px",height:"30px" ,border:"none",borderRadius:"4px"}}>CONFIRM</button>
                <button style={{backgroundColor:"rgb(0, 110, 255)",color:"white",width:"110px",height:"30px" ,border:"none",borderRadius:"4px",marginLeft:"10px"}}>CANCEL</button>
              

        </form>
        </div>
    )
}