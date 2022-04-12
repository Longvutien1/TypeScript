import { Space, Table } from 'antd'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { OrderType } from '../../types/products'

type Props = {
    orders: OrderType[],
}

const OrderManager = ({orders}: Props) => {
  // title 
  const headings = [
    { title: "STT", dataIndex: "stt", key: "stt"},
    { title: "Name", dataIndex: "name", key: "name"},
    { title: "Phone", dataIndex: "phone", key: "phone"},
    { title: "Address", dataIndex: "address", key: "address"},
    { title: "Status", dataIndex: "category", key: "category"},
    {
        title: "Action",
        key:'action',
        render:  (recore:any) => (
            <Space size="middle">
                {/* <a href='edit/:id' >Edit</a> */}
                <NavLink to={'/admin/order/edit/'+recore.id}>Detail Order</NavLink>
                {/* <button onClick={ () => onRemove(id)}>Remove</button> */}
                <button >Delete</button>
            </Space>
        )
    }
]

// data
const dataSourd =  orders.map((item,index) => {
    // console.log(item.img);
    console.log(item);
    
    return {
        key: index+ 1,
        stt:  index+ 1,
        name: item.userInfomation.name,
        phone: item.userInfomation.phone,
        address: item.userInfomation.address,
        status: 1,
        // img: <img src={item.img} alt="" style={{width:"100px"}} />,
        // price: item.price,
        // category: item.category,
        id: item._id
    }
})


 return (
<div>
   
        <h1>Order Manager</h1>
   
    <Table columns={headings} dataSource={dataSourd}></Table>
    
</div>
)
}

export default OrderManager