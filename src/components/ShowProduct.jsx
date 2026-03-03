import React from 'react'
import '../App.css'

function ShowProduct({result}) {
  function  addCart(pt) {
    let cart = JSON.parse(localStorage.getItem("cart") || "[]")
    cart.push(pt)
    localStorage.setItem("cart", JSON.stringify(cart))
    alert("Product added to cart. Cart now has " + cart.length + " items.")
  }
  return (
    <div style={{ "display": "flex", "flexWrap": "wrap", "gap": "40px" }}>
      {result.map((pt)=>{
        return (
          <div className="card">
            <h4> {pt.title.substring(0, 20)}... </h4>
            <img src={pt.image} alt="product" />
            <p> ₹{pt.price} </p>
            <button onClick={()=>addCart(pt)}>Add to Cart</button>
          </div>
        )
      })}
    </div>
  )
}

export default ShowProduct