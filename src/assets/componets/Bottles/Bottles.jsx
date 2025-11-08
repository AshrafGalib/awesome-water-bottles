import React, { useEffect, useState } from 'react';
import { use } from 'react';
import Bottle from '../Bottle/Bottle';
import "./Bottles.css"
import { getCartFromLocalStorage, setCartToLocalStorage } from '../../../utilities/localStorage';

const Bottles = ({bottlesPromise}) => {
const bottles =use(bottlesPromise)
//console.log(bottles)
    const [cart,setCart]=useState([])
  
    useEffect(()=>{
    const storeCartIDs  = getCartFromLocalStorage()
    console.log(storeCartIDs)
    const storedCart =[]
    for(const id of storeCartIDs ){
    console.log(id)
    const cartBottle =bottles.find(bottle=>bottle.id===id)
    if(cartBottle){
        storedCart.push(cartBottle)
    }
    }
    setCart(storedCart)
   },[bottles]) 
   
   const handleToAddCart =(bottle)=>{
        // console.log(bottle)
        const newCart =[...cart,bottle]
        setCart(newCart)
        setCartToLocalStorage(bottle.id)
    }

   
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