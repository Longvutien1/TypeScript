import React from 'react'
import { ProductType } from '../../types/products'
import { useForm, SubmitHandler} from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';
type AddProductProps = {
    onAdd: (product: ProductType) => void
}

type FormInputs = {
    id:number
    name: string,
    price: number
}
const AddProduct = (props: AddProductProps) => {
    const { register, handleSubmit, formState} = useForm<FormInputs>();
    const navigate = useNavigate();
    const onSubmit: SubmitHandler<FormInputs> = (data) =>{
         props.onAdd(data);
         console.log(data);
         
         navigate('/admin/productmanager')
    }
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
                <label htmlFor="exampleInputPassword1" className="form-label" >Desc</label>
                <input type="text" className="form-control" id="exampleInputPassword1"style={{fontSize:'13px'}} />
            </div>
            <button type="submit" className="btnAdmin btn-primary">Submit</button>
        </form>

    </div>
  )
}

export default AddProduct;