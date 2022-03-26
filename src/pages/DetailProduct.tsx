import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../api/products';
import { ProductType } from '../types/products';

type Props = {}

const   DetailProduct = (props: Props) => {
    const {id} = useParams();
    const [products, setProduct] = useState<ProductType>();
    useEffect(() => {
        const getProduct = async (id:any) => {
            const {data} = await getProductById(id);
            setProduct(data);
            console.log(data);
            
        }
        getProduct(id);
    }, [id])
  return (
    <div>
        <h1>DetailProduct</h1>
        <p>Product name: {products?.name}</p>
        <p>Product price: {products?.price}</p>


    </div>
  )
}

export default DetailProduct