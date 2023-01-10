import {React,useState}  from 'react';
import Alertpop from './Alertpop';
import FOR from "./form1.module.css";
import{useForm} from"react-hook-form";
import{yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
    wh:yup.string().required(),
    product:yup.number().required(),
    gtin:yup.string().required(),
    variant:yup.number().positive().integer().required(),
    lot:yup.number().positive().integer().required(),
    quantity:yup.number().max(10).required(),
    toloc:yup.string().required(),

});
const Form1 = () => {
    const [toggleT1,setToggleT1] = useState(false);

    const{register,handleSubmit,formState:{errors}}=useForm({
        resolver:yupResolver(schema),
      });
    
      const submitForm = (data) =>{
        data.preventDefault();
          console.log(data);
          setToggleT1(!toggleT1);
    };
     
    
  return (
    <>
    <div className={FOR.f1cont}>
        <form onSubmit={handleSubmit}>
            <div className={FOR.inputf} >
                <label className={FOR.label1}>WH :</label>
                <input className={FOR.input1} type="text" name='wh' {...register('wh')}/>
                {errors.wh && <p>Please enter wh</p>}
            </div>
            <div className={FOR.inputf} >
                <label className={FOR.label1}>Product :</label>
                <input className={FOR.input1} type="number" name='product' {...register('product')}/>
                {errors.product && <p>Please enter Product</p>}
            </div>
            <div className={FOR.inputf} >
                <label className={FOR.label1}>GTIN :</label>
                <input className={FOR.input1} type="text" name='gtin' {...register('gtin')}/>
                {errors.gtin && <p>Please enter GTIN</p>}
            </div>
            <div className={FOR.inputf} >
                <label className={FOR.label1}>Variant :</label>
                <input className={FOR.input1} type="number" name='variant' {...register('variant')}/>
                {errors.variant && <p>Please enter variant</p>}
            </div>
            <div className={FOR.inputf} >
                <label className={FOR.label1}>Lot :</label>
                <input className={FOR.input1} type="number" name='lot' {...register('lot')}/>
                {errors.lot && <p>Please enter lot</p>}
            </div>
            <div className={FOR.inputf} >
                <label className={FOR.label1}>Quantity :</label>
                <input className={FOR.input1} type="number" name='quantity' {...register('quantity')}/>
                {errors.quantity && <p>Please enter quantity</p>}
            </div>
            <div className={FOR.inputf} >
                <label className={FOR.label1}>To Loc. :</label>
                <input  className={FOR.input1} type="text" name='toloc' {...register('toloc')}/>
                {errors.toloc && <p>Please enter Loc</p>}
            </div>
            <div>
                <button className={FOR.btn2} onClick={submitForm}>Submit</button>
            </div>
            {toggleT1?<Alertpop/>:null}

            
        </form>
    </div>
    </>

  )
}

export default Form1;