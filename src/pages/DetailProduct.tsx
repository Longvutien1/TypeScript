import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

type Props = {}
type ProductType = {
    _id: number,
    name: string,
    price: number
}
const DetailProduct = (props: Props) => {
    const {id} = useParams();
    const [product, setProduct] = useState<ProductType>();
    useEffect(() => {
        const getProduct = async () => {
            const response = await fetch('http://localhost:27017/we16308/products');
            const data = await response.json();
            setProduct(data);
            console.log(data);
            
        }
        getProduct();
    }, [id])
  return (
    <div>
        <h1>DetailProduct</h1>
       


    </div>
  )
}

export default DetailProduct