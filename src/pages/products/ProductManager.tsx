import { Space, Table } from 'antd'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { ProductType } from '../../types/products'

type ProductManagerProps = {
    products: ProductType[],
    onRemove: (id:number) => void
}

const ProductManager =   ( { products, onRemove }: ProductManagerProps) => {

    // title 
    const headings = [
        { title: "STT", dataIndex: "stt", key: "stt"},
        { title: "Name", dataIndex: "name", key: "name"},
        { title: "Price", dataIndex: "price", key: "price"},
        // { title: "Id", dataIndex: "id", key: "id"},
        {
            title: "Action",
            key:'action',
            render:  (recore:any) => (
                <Space size="middle">
                    {/* <a href='edit/:id' >Edit</a> */}
                    <NavLink to={'/admin/edit/'+recore.id}>Edit</NavLink>
                    {/* <button onClick={ () => onRemove(id)}>Remove</button> */}
                    <button  onClick={() => onRemove(recore.id)}>Delete</button>
                </Space>
            )
        }
    ]

    // data
    const dataSourd =  products.map((item,index) => {
        return {
            key: index+ 1,
            stt: item.id,
            name: item.name,
            price: item.price,
            id: item.id,
        }
    })


     return (
    <div>
        <button className='btnAdmin'><NavLink to="/admin/add">Add Product</NavLink></button>
            <h1>ProductManager</h1>
       
        <Table columns={headings} dataSource={dataSourd}></Table>
        
    </div>
  )
}

export default ProductManager