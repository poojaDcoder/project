import Table from 'react-bootstrap/Table';
import React from 'react';
import './product.css';
import {IoMdCloseCircleOutline} from 'react-icons/io';

export const Product = () =>{
  return (
    <div className="producttablecontainer">
      <div style={{textAlign:"center",color:"white",height:"50px",display:"flex",justifyContent:"center",
        columnWidth:"100%",backgroundColor:"rgb(190, 54, 54)",borderTopLeftRadius:"10px",borderTopRightRadius:"10px"}}className="titlebar">
        <h5 style={{paddingTop:"10px"}}>Product/Country Assignment</h5><IoMdCloseCircleOutline style={{marginTop:"15px",width:"fit-content",height:"18px",color:"white",cursor:"pointer"}}/>
      </div>
      <Table striped bordered hover >
        <thead>
         <tr style={{backgroundColor:"rgb(196, 250, 232)"}}>
          <th><input type="checkbox"></input></th>
          <th style={{textAlign:"left",color:"GrayText"}}>Product Code</th>
          <th style={{textAlign:"left",color:"GrayText"}}>Ship to Country</th>
        </tr>
      </thead>
      <tbody>
        <tr style={{height:"2px"}}>
            <td><input type="checkbox" ></input></td>
            <td style={{backgroundColor:"white"}}><input type="text" style={{width:"500px",height:"25px"}}></input></td>
            <td style={{backgroundColor:"white"}}><input type="text" style={{width:"500px",height:"25px"}}></input></td>
        </tr>
        <tr style={{height:"2px"}}>
            <td><input type="checkbox" ></input></td>
            <td style={{backgroundColor:"white"}}><input type="text" style={{width:"500px",height:"25px"}}></input></td>
            <td style={{backgroundColor:"white"}}><input type="text" style={{width:"500px",height:"25px"}}></input></td>
        </tr>
        <tr style={{height:"2px"}}>
            <td><input type="checkbox" ></input></td>
            <td style={{backgroundColor:"white"}}><input type="text" style={{width:"500px",height:"25px"}}></input></td>
            <td style={{backgroundColor:"white"}}><input type="text" style={{width:"500px",height:"25px"}}></input></td>
        </tr>
        <tr style={{height:"2px"}}>
            <td><input type="checkbox" ></input></td>
            <td style={{backgroundColor:"white"}}><input type="text" style={{width:"500px",height:"25px"}}></input></td>
            <td style={{backgroundColor:"white"}}><input type="text" style={{width:"500px",height:"25px"}}></input></td>
        </tr>
        <tr style={{height:"2px"}}>
            <td><input type="checkbox" ></input></td>
            <td style={{backgroundColor:"white"}}><input type="text" style={{width:"500px",height:"25px"}}></input></td>
            <td style={{backgroundColor:"white"}}><input type="text" style={{width:"500px",height:"25px"}}></input></td>
        </tr>
        <tr style={{height:"2px"}}>
            <td><input type="checkbox" ></input></td>
            <td style={{backgroundColor:"white"}}><input type="text" style={{width:"500px",height:"25px"}}></input></td>
            <td style={{backgroundColor:"white"}}><input type="text" style={{width:"500px",height:"25px"}}></input></td>
        </tr>
        
        
    </tbody>
    </Table>
    <div className='buttons' style={{display:"inline-flex",marginTop:"10px",gap:"20%"}}>
    <button className='butn1'>DELETE</button>
    <button className='butn2'>DONE</button>
    </div>
    </div>

    

  );
};

export default Product;