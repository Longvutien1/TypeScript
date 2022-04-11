import React from 'react'
import { CartProvider, useCart } from "react-use-cart";
type Props = {}

const Cart = (props: Props) => {
  const { isEmpty, totalUniqueItems, items, totalItems, cartTotal, updateItemQuantity, removeItem, emptyCart } = useCart();
  if (isEmpty) {
    return <h1>Your cart is empty</h1>
  }
  return (
    <div>Cart
      <section>
        <h5>Cart ({totalUniqueItems}) total Items: ({totalItems})</h5>
        <table className="table ">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => {
              return(
                <tr key={index}>
                  <th scope="row">{index+1}</th>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.quantity}</td>
                  <td>
                    <button onClick={() => updateItemQuantity(item.id, item.quantity -1)}>-</button>
                    <button onClick={() => updateItemQuantity(item.id, item.quantity +1)}>+</button>
                    <button onClick={() => removeItem(item.id)}>Remove</button>
                  </td>
                </tr> 
               
              )
            })}
                  <tr>
                     <td>Tổng tiền: {cartTotal}</td>
                  </tr>
          </tbody>
        </table>

      </section>
    </div>
  )
}

export default Cart