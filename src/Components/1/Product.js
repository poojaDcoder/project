import React from 'react';
import PRO from './product.module.css';
import {IoMdCloseCircleOutline} from 'react-icons/io';

export const Product = () =>{
  return (
    <>
    <section>
    <div className={PRO.productcont}>
      <div className={PRO.protitle}>
        <div>
        Product/Country Assignment
        </div>
        <div>
        <IoMdCloseCircleOutline size={25} style={{cursor:"pointer"}}/>
        </div>
      </div>
      <div className={PRO.protable}>
      
        <thead>
         <tr style={{backgroundColor:"rgba(39, 151, 95, 0.247)"}}>
          <th><input type="checkbox"></input></th>
          <th className={PRO.tabhead1}style={{textAlign:"center",color:"white"}}>Product Code</th>
          <th className={PRO.tabhead2}  style={{textAlign:"center",color:"white"}}>Ship to Country</th>
        </tr>
      </thead>
      <tbody>
        <tr style={{height:"2px"}}>
            <td><input type="checkbox"></input></td>
            <td><input type="text"></input></td>
            <td><input type="text"></input></td>
        </tr>
        <tr style={{height:"2px"}}>
            <td><input type="checkbox"></input></td>
            <td><input type="text"></input></td>
            <td><input type="text"></input></td>
        </tr>
        <tr style={{height:"2px"}}>
            <td><input type="checkbox"></input></td>
            <td><input type="text"></input></td>
            <td><input type="text"></input></td>
        </tr>
        <tr style={{height:"2px"}}>
        <td><input type="checkbox"></input></td>
            <td><input type="text"></input></td>
            <td><input type="text"></input></td>
        </tr>
        <tr style={{height:"2px"}}>
        <td><input type="checkbox"></input></td>
            <td><input type="text"></input></td>
            <td><input type="text"></input></td>
        </tr>
        <tr style={{height:"2px"}}>
        <td><input type="checkbox"></input></td>
            <td><input type="text"></input></td>
            <td><input type="text"></input></td>
        </tr>
        <tr style={{height:"2px"}}>
        <td><input type="checkbox"></input></td>
            <td><input type="text"></input></td>
            <td><input type="text"></input></td>
        </tr>
        <tr style={{height:"2px"}}>
        <td><input type="checkbox"></input></td>
            <td><input type="text"></input></td>
            <td><input type="text"></input></td>
        </tr>
      </tbody>
      
    
    <div style={{display:"inline-flex",marginTop:"10px",gap:"20%"}}>
    <button className={PRO.butn1}>DELETE</button>
    <button className={PRO.butn2}>DONE</button>
    </div>
      </div>
    </div>
    </section>
    </>
    
  );
};

export default Product;