import React, { useState } from 'react'
import ShowInfo from '../components/ShowInfo';

type Props = {}

const HomePage = (props: Props) => {
  const [count, setCount] = useState(0)
  const [myName, setMyName] = useState("Vũ Tiến Long");
  const [status, setStatus] = useState(true);
  const [info, setInfor] = useState({id:1, name:"Long chanh thôn"});
  const [products, setProducts] = useState([
    { id: 1, name: "Product A" },
    { id: 2,  name: "Product B" },
    { id: 3,name: "Product C" }
  ]
  )

  const remove = (id:number) => {
    const newProduct = products.filter(item => item.id !== id);
    setProducts(newProduct);
  }
  return (
    <div>
        <h1>Home Page</h1>
        <ShowInfo name={'Long ShowInfo'} age={0} />
         <hr />
        Count : {count} <button onClick={() => setCount(count + 1)}>Click</button>
         <hr />
        Fullname: {myName}
         <hr />
         
        Status: {status ? "True" : "False"}
         <hr />
        Info: {info.name}
         <hr />
        Product: {products.map(item =>
           <div>
              <div> Id: {item.id} Name: {item.name} <button onClick={() => remove(item.id)}>Remove</button></div>
              {console.log(item)}
          </div> )}
    </div>
     
   


  )
}

export default HomePage;