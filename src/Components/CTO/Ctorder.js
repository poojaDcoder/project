import React from 'react';
import CTO from "../CTO/ctorder.module.css";
import {BsUpcScan} from "react-icons/bs";
import { useState } from 'react';
import CtorderTable from './CtorderTable';

const Ctorder = () => {
    const [toggleCTO,setToggleCTO] = useState(false);
    const toggleHandlerCTO =()=>{
      setToggleCTO(!toggleCTO);
    }

  return (
    <>
    <div>
        <h3>Create Transformation  Order</h3>
    </div>
    <div className={CTO.ctoContainer}>
        <div className={CTO.huNum}>
        <label className={CTO.huLabel} htmlFor="hu"><BsUpcScan size={20} style={{marginBottom:"5px"}}/> HU NUMBER</label>
            <input type="text" name='hu'/>
        </div>
        <div className={CTO.ctoFormContainer}>
            <form action="" className={CTO.ctoMainform}>
                
                <div className={CTO.formRow1} style={{width:"100%",columnGap:"20px"}}>
                    <thead>
                    <tr>
                        <th>
                            <label htmlFor="toNumber" className={CTO.ctoformLabel1}>Transform Order Number #</label>
                        </th>
                        <th>
                            <label htmlFor="toStatus" className={CTO.ctoformLabel1}>Transform Order Status</label>
                        </th>
                         <th>
                         <label htmlFor="salesOrder" className={CTO.ctoformLabel1}><span style={{color:"red"}}>*</span> Sales Order#</label>
                         </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td><input type="text" name='toNumber' id='toNumber'  /></td>
                        <td><input type="text" name='toStatus' id='toStatus'  /></td>
                        <td><input type="text" name='salesOrder' id='salesOrder' required/></td>
                    </tr>
                    </tbody>
                </div>

                {/* FORM ROW 2 starts here---- */}
                <div className={CTO.formRow2}>
                <thead>
                    <tr>
                        <th>
                            <label htmlFor="enterDelivery" className={CTO.ctoformLabel}>Enter Delivery</label>
                        </th>
                        <th>
                            <label htmlFor="shipCountry" className={CTO.ctoformLabel}><span style={{color:"red"}}>*</span>Ship to Country</label>
                        </th>
                         <th>
                         <label htmlFor="sites" className={CTO.ctoformLabel}>Transformation Site</label>
                         </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td><input type="text" name='enterDelivery' className={CTO.ctoformInput} /></td>
                        <td><select  className={CTO.ctoCountry} id="sites" name="shipCountry" required>
                                <option value="111">Poland</option>
                                <option value="222">France</option>
                                <option value="333">Russia</option>
                                <option value="444">Ukraine</option>
                        </select></td>
                        <td><input type="text" name='enterDelivery' className={CTO.ctoformInput} /></td>
                    </tr>
                    </tbody>
                </div>

                {/* FORM ROW 3 starts here---- */}
                <div className={CTO.formRow3}>
                <thead>
                    <tr>
                        <th>
                            <label htmlFor="" className={CTO.ctoformLabel3}><span style={{color:"red"}}>*</span>Enter GTIN</label>
                        </th>
                        <th>
                        <label htmlFor="" className={CTO.ctoformLabel3}><span style={{color:"red"}}>*</span>Enter Batch</label>
                        </th>
                         <th>
                         <label htmlFor="" className={CTO.ctoformLabel3}><span style={{color:"red"}}>*</span>Enter Material</label>
                         </th>
                         <th>
                         <label htmlFor="" className={CTO.ctoformLabel3}>Enter Variant</label>
                         </th>
                         <th>
                         <label htmlFor="" className={CTO.ctoformLabel3}>*Enter Quantity</label>
                         </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td><input type="text" className={CTO.ctoFormInput3} required/></td>
                        <td><input type="text" className={CTO.ctoFormInput3} required/></td>
                        <td><select className={CTO.ctoCountry} id="sites" name="sites">
                                <option value="111">Poland</option>
                                <option value="222">France</option>
                                <option value="333">Russia</option>
                                <option value="444">Ukraine</option>
                        </select></td>
                        <td><input type="text" className={CTO.ctoFormInput3} /></td>
                        <td><input type="text" className={CTO.ctoFormInput3} /></td>
                    </tr>
                    </tbody>
                </div>
                <div className={CTO.saveBtn}>
                <button style={{fontWeight:"bold"}} class="btn btn-primary" onClick={toggleHandlerCTO}>SAVE</button>
                </div>
                
            </form>
        </div>
        <div className={CTO.outputTable}>
        {toggleCTO?<CtorderTable/>:null}
        </div>
    </div>
    </>
  )
}

export default Ctorder;