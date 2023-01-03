import React from 'react';
import './Components/componentAssignment.css';
import Navbar from '../Navbar';

const ComponentAssignment = () => {
  return (
    <>
    <section className="mainbody">
    < Navbar />
    
    <div className="app-container" >
    <form  >
      <table>
        <thead>
          <tr style={{display:"inline-flex",gap:"20px"}}>
            <th>*Component Type</th>
            <th>*Component Control No</th>
            <th style={{paddingRight:"70px"}}>*Revision</th>
          </tr> <br />
          <tr style={{display:"inline-flex",gap:"2px"}}>
          <input type="text" name='dyanamicLabel' required="required" placeholder='Dynamic Label'
                />
                <input type="text" name='componentControlNo' required="required" placeholder='Component Control No'/>
                <input type="text" name='revision'  required="required" placeholder='Revision'/> 
          </tr>
        </thead>

        {/* operations */}
        <div class="d-flex flex-row-reverse " style={{width:"100%",marginLeft:"99%",columnGap:"4px"}}>
        <button class="btn btn-danger" type="submit">RESET</button>
        <button class="btn btn-primary" type="submit">DISPLAY</button>
        <button class="btn btn-warning" type="submit">CHANGE</button>
        <button class="btn btn-success" type="submit">CREATE</button>
        </div> 

        <tbody>
            
        </tbody>
        
      </table>
      </form>
    </div>
    </section>  

    
    </>    
  )
}

export default ComponentAssignment;
