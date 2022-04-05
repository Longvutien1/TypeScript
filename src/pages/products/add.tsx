import React, { useEffect, useState } from 'react'
import { CategoryType, ProductType } from '../../types/products'
import { useForm, SubmitHandler} from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';
type AddProductProps = {
    listCategory: CategoryType[],
    onAdd: (product: ProductType) => void
   
}

type FormInputs = {
    id:number
    name: string,
    price: number,
    category?: number
}
const AddProduct = ({listCategory, onAdd}: AddProductProps) => {
    const { register, handleSubmit, formState} = useForm<FormInputs>();
    const navigate = useNavigate();
    const onSubmit: SubmitHandler<FormInputs> = (data) =>{
         onAdd(data);
         console.log(data)  ;
         
         navigate('/admin/product')
    }
    // listCategory.map(item => item.name)
   
  return (
    <div>
        <h1>Add Product</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Product name</label>
                <input type="text" {...register('name',{required:true})} className="form-control" style={{fontSize:'13px'}} id="exampleInputEmail1"  />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Price</label>
                <input type="number" {...register('price', {required:true})} className="form-control" style={{fontSize:'13px'}} id="exampleInputPassword1" />
            </div>

            <div className="mb-3">
                <select style={{border:"1px #ddd solid"}} {...register('category')} id="fruit">
                    {listCategory?.map((item) => (
                        <option value={item._id as number}>{item.name}</option>
                       
                    ))}
                    
                </select>
               
            </div>

            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label" >Desc</label>
                <input type="text" className="form-control" id="exampleInputPassword1"style={{fontSize:'13px'}} />
            </div>
            <button type="submit" className="btnAdmin btn-primary">Submit</button>
        </form>

    </div>
  )
}

export default AddProduct;