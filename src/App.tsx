
import './App.css'
import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home';
import ProductPage from './pages/product';
import AboutPage from './pages/about';
import Header from './components/header';
import WebsiteLayout from './pages/layouts/WebsiteLayout';
import AdminLayout from './pages/layouts/AdminLayout';
import DetailProduct from './pages/DetailProduct';
import { useEffect, useState } from 'react';
import { ProductType } from './types/products';
import { addProduct, list, remove, update } from './api/products';
import Login from './pages/login';
import ProductManager from './pages/products/ProductManager';
import AddProduct from './pages/products/add';
import EditProduct from './pages/products/edit';
import PrivateRouter from './components/PrivateRouter';
function App() {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    const getProduct = async () => {
      const {data} = await list();
      setProducts(data);
    }
    getProduct();
  },[])

  const removeItem = async (id:number) => {
    // xóa trên api
    await remove(id);
    // reRender
     setProducts(products.filter(item => item.id !== id))
  }

  const onHandleAdd = async (product:ProductType) => {
    const {data} =  await addProduct(product);
    setProducts([...products, data])
  }

  const onHandlerUpdate = async (product:ProductType) => {
    const {data} = await update(product);
    setProducts(products.map(item => item.id === data.id ? data : item ));
  }
  return (

    <div >
      
        <main>
          <Routes>
            <Route path="/" element={<WebsiteLayout/>}>
              <Route index element={<HomePage data={products} />}/>
              <Route path="product" element={<ProductPage/>}/>
              <Route path="about" element={<AboutPage/>}/>
              <Route path="/product/:id" element={<DetailProduct />} /> 
            </Route>
      
            <Route path="/login" element={<Login/>}>

             
            </Route>

            <Route path="admin" element={<PrivateRouter><AdminLayout/></PrivateRouter>}>
                <Route index element={<Navigate to="productmanager"/>}/>
                {/* <Route path="dashboard" element={<h1>Dashboard</h1>}/> */}
                <Route path="productmanager" element={<ProductManager products={products} onRemove={removeItem}/>}/>
                <Route path="add" element={<AddProduct onAdd={onHandleAdd}/>}/>
                <Route path="edit/:id" element={<EditProduct onUpdate={onHandlerUpdate}/>}/>
            </Route>
          </Routes>


        </main>
    </div>
  )
}

export default App;
