import React from 'react';
import {BsCardHeading, BsTextIndentLeft, BsUpcScan} from "react-icons/bs";
//import CTO from "../CTO/ctorder.module.css";
import WOE from "../3/workorder.module.css";
const WorkOrder = () => {
  return (
    <>
    <div className={WOE.title}>Work Order Execution</div>
    <div className={WOE.ctoContainer}>
        <div className={WOE.huNum}>
            <label className={WOE.huLabel} htmlFor="hu"><BsUpcScan style={{marginBottom:"5px",marginTop:"10px",size:"20"}}></BsUpcScan>HU NUMBER</label>
            <input type="text" name='hu'/>
            <button className={WOE.butn1}>CLEAR </button>
            <button className={WOE.butn2}>PRINT PICK LIST</button>
        </div>
    </div>
    <div>

    </div>
    
    </>
    
  )
}

export default WorkOrder