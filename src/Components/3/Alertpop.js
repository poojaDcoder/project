import React from 'react';
import AL from "./alert.module.css";

const Alertpop = () => {
  return (
    <>
    <div className={AL.alertcont}>
        <div className={AL.alerttitle}>
            <h4 className={AL.title1}>Messages</h4>
        </div>
        <div className={AL.alertbody}>
            <h4>Inventory moved in PRMS</h4>
            <button className={AL.btn1}>Okay</button>
        </div>
        
    </div>
    </>
  )
}

export default Alertpop;