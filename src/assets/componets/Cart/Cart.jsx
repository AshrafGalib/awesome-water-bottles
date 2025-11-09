import React from 'react';
import './Cart.css'

const Cart = ({cart,handleToRemoveFromCart}) => {
    console.log(cart)
    return (
        <div className='cartContainer'>
            <h2>Added to cart: {cart.length}</h2>
            {
                cart.map(bottle=>
                <div key = {bottle.id}  className='cartComponent'>
                    <img  src={bottle.img} alt=""/>
                    <p>{bottle.name}</p>
                    <p>Price:{bottle.price}$</p>
                    <button onClick={()=>handleToRemoveFromCart(bottle.id)}>Remove</button>
                </div>)
            }
        </div>
    );
};

export default Cart;