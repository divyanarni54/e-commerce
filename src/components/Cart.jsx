import React from 'react'
import { useNavigate } from 'react-router-dom';

function Cart() {
    const cartItems = [
        localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []];
        const navigate = useNavigate();
    
      function handleSubmit() {
        alert("Order placed successfully! Total cost: ₹" + cartItems[0].reduce((total, item) => total + item.price, 0));
        localStorage.removeItem("cart");
        navigate('/Products');
      }
  return (
    <div className="main-content common">
      <table className='border border-gray-300 shadow-xl rounded-lg'>
        <tr>
          <td className="p-[2vw]" colSpan={2}>
            <h1 className="underline">
         Billing page
            </h1>
          </td>
        </tr>

        <tr>
          <td><b>product Name</b></td>
          <td ><b>Product Cost</b></td>
        </tr>
       { cartItems[0].map((item) => (
        <tr>
          <td>{item.title.substring(0, 15)}</td>
          <td>₹{item.price}</td>
        </tr>
       ))   }
       
        <tr>
            <td>
                Total Cost
            </td>
            <td>₹{cartItems[0].reduce((total, item) => total + item.price, 0)} </td>
        </tr>

        <tr>
          <td className="p-[2vw] text-center" colSpan={2}>
            <button onClick={handleSubmit} className='bg-indigo-300 text-white px-6 py-3 rounded-lg shadow-md hover:bg-indigo-700 hover:shadow-xl transition duration-900'>BuyNow</button>
          </td>
        </tr>        
      </table>
    </div>
  )
}

export default Cart