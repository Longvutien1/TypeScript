import React, { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { getProductById, list } from '../../api/products'
import { ProductType } from '../../types/products'

type EditProductProps = {
    onUpdate: (product:ProductType) => void
}
type FormInputs = {
  name:string,
  price:number
}
const EditProduct = ({onUpdate}: EditProductProps) => {

  const {register, handleSubmit, formState:{errors}, reset} = useForm<FormInputs>();

  const navigate = useNavigate();
  const {id} = useParams();
 
  useEffect(()=>{
    const getProduct2 = async (id:any) => {
      const {data} = await getProductById(id);
      console.log(data);

      // đồng bộ dữ liệu
      reset(data)
      
      
    }
    getProduct2(id);
  },[]);
  
  const onSubmit: SubmitHandler<FormInputs> = data => {
    // console.log(data);
    onUpdate(data);
    navigate('/admin/productmanager');
    
  }
  return (
    <div>
      <h1>EditProduct</h1>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Product name</label>
                <input type="text" {...register('name',{required:true})}   className="form-control" style={{fontSize:'13px'}} id="exampleInputEmail1"  />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Price</label>
                <input type="number" {...register('price', {required:true})} className="form-control" style={{fontSize:'13px'}} id="exampleInputPassword1" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Desc</label>
                <input type="text" className="form-control" id="exampleInputPassword1" style={{fontSize:'13px'}} />
            </div>
            <button type="submit" className="btnAdmin btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default EditProduct;