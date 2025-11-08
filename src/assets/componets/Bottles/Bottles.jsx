import React, { useState } from 'react';
import { use } from 'react';
import Bottle from '../Bottle/Bottle';
import "./Bottles.css"

const Bottles = ({bottlesPromise}) => {
const bottles =use(bottlesPromise)
    const [cart,setCount]=useState([])
   
    const handleToAddCart =(bottle)=>{
        // console.log(bottle)
        const newCart =[...cart,bottle]
        setCount(newCart)
    }

    // console.log(bottles)
    return (
        <>
            <h1>Buy awesome Water Bottles.</h1>
            <h2>Total Bottles : {bottles.length}</h2>
            <div className='two-columns-container'>
                
            <div className='bottles-container'>
           {
            bottles.map(bottle=><Bottle 
                key ={bottle.id} 
                bottle={bottle}
                handleToAddCart={handleToAddCart}>
                </Bottle>)
           }
           
        </div>
        <div className='cart-card'>
        <h2>Added to cart: {cart.length}</h2>
        </div>
            </div>
            
        </>
    );
};

export default Bottles;