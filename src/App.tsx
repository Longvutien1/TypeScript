
import './App.css'
import { NavLink, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home';
import ProductPage from './pages/product';
import AboutPage from './pages/about';
function App() {

  return (

    <div className="container">
        <header>
          <ul>
            <li><NavLink to="/">Home Page</NavLink></li>
            <li><NavLink to="/product">Product Page</NavLink></li>
            <li><NavLink to="/about">About Page</NavLink></li>
          </ul>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<HomePage/>}></Route>
            <Route path="/product" element={<ProductPage/>}></Route>
            <Route path="/about" element={<AboutPage/>}></Route>
            
          </Routes>
        </main>
    </div>
  )
}

export default App;
