
import './App.css'
import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home';
import ProductPage from './pages/product';
import AboutPage from './pages/about';
import Header from './pages/header';
import WebsiteLayout from './pages/layouts/WebsiteLayout';
import AdminLayout from './pages/layouts/AdminLayout';
import DetailProduct from './pages/DetailProduct';
import { useEffect, useState } from 'react';
import { ProductType } from './types/products';
import { list, remove } from './api/products';
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
    const {data} = await remove(id);
    // reRender
    data && setProducts(products.filter(item => item.id !== data.id))
  }
  return (

    <div >
      
        <main>
          <Routes>
            <Route path="/" element={<WebsiteLayout/>}>
              <Route index element={<HomePage data={products} />}/>
              <Route path="product" element={<ProductPage/>}/>
              <Route path="about" element={<AboutPage/>}/>
              <Route path="/product/:id" element={<DetailProduct/>} />
            </Route>

            <Route path="admin" element={<AdminLayout/>}>
                <Route index element={<Navigate to="dashboard"/>}/>
                <Route path="dashboard" element={<h1>Dashboard</h1>}/>
            </Route>
          </Routes>


        </main>
    </div>
  )
}

export default App;
