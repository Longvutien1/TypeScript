import React from 'react'
import { NavLink } from 'react-router-dom'
import { CategoryType, ProductType } from '../types/products'
import { List, Card, Image, Button } from 'antd';
import { top10Product } from '../api/products';

type ShopProps = {
    data: ProductType[],
    listCategory: CategoryType[]
}

const getProductTop10 = async () => {
    const {data} = await top10Product();
      console.log(data);
      
}

getProductTop10();
const Shop = ({data, listCategory}: ShopProps) => {

  const dataSourd =  data.map((item,index) => {
    return {
        key: index+ 1,
        stt: item._id,
        name: item.name,
        price: item.price
    }
  })


  
  return (
    <section className="container-shop">
    <div className="left col-span-3">
    <div className="mb-8" style={{marginBottom:"22px"}}>
      <p className="text-3xl mb-2" style={{fontSize:"24px", marginBottom:"8px"}}>Sreach</p>
      <div className="w-full border border-solid flex justify-between" style={{display:"flex", justifyContent:"space-between"}}>
        <input className="w-10/12 p-1 outline-none  normal-case" style={{width:"80%", outline:"none"}} id="search" type="text" placeholder="Tìm kiếm" name="search" />
        <button className="w-2/12  mx-auto btn_search" style={{width:"20%",margin:"auto", background:"none"}} id="btn-search" type="submit" name="submitSearch"><i className="fas fa-search" /></button>
      </div>
    </div>
    <ul>
      <li className="border text-white pl-4 text-3xl py-2" style={{backgroundColor: '#27ae60', color: '#FFF', fontSize:"18px", paddingLeft:"16px"}}>CATEGORY</li>
      <div className="category" style={{height: 250, overflow: 'scroll'}}>
        {
        listCategory.map((item) => <div>
            <NavLink to={'/shop/'+item._id} id="btn-category"><li className="xam border px-4  py-2" style={{border: "1px solid #27ae60", color:"#000"}}>{item.name}</li></NavLink>
          </div> )
        }
        {/* <NavLink to="/#/shop/${item.id}" id="btn-category"><li className="xam border px-4  py-2" style={{border: "1px solid #27ae60", color:"#000"}}>loại 1</li></NavLink> */}
      </div>
      <li className="border px-4  py-2" style={{backgroundColor: '#27ae60', color: '#000'}}>
        <form  method="GET">
          <input className="w-full p-1 outline-none" style={{width:"100%", padding:"4px", outline:"none"}} type="text" name="search_loai" placeholder="Từ khóa tìm kiếm" />
        </form>
      </li>
    </ul>
    <ul>
      <li className="border text-white pl-4 text-3xl py-2 mt-8" style={{backgroundColor: '#27ae60', color: '#fff', fontSize:"18px", paddingLeft:"16px"}}>FAVORITE PRODUCTS</li>
      ${'{'}await ListProduct.listProductTopViewShop(){'}'}
      <li className="border px-4  py-2" style={{backgroundColor: '#27ae60'}}>
        <p className="p-3" />
      </li>
    </ul>
  </div>
  <div className="right col-span-9">
    <h4 className="italic text-3xl text-center text-red-200" style={{marginTop:"17px"}}>Sản Phẩm Của Chúng Tôi</h4>
    
    {/* <div id="product" className="product-shop sm:grid sm:grid-cols-1 sm:grid sm:grid-cols-2 lg:grid lg:grid-cols-3 gap-8 mt-8 "> */}
    <List
      grid={{ gutter: 16, column: 3 }}
      size={'default'}
      dataSource={dataSourd}
      pagination={{
        onChange: page => {
          console.log(page);
        },
        pageSize: 6,
      }}
      renderItem={item => (
        <List.Item>
          
          <Card title={<Image width={230}  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />}>
              <p>{item.name}</p>
              <p> ${item.price}</p>
              <NavLink to="" data-id="${item.id}" className="btn" id="btnAddToCart">add to cart</NavLink>
          </Card>
        </List.Item>
      )}
    />,
    {/* </div> */}
    {/*end all sản phẩm  */}
    {/* end danh sách sản phẩm */}
  </div>
</section>

  )
  }
export default Shop