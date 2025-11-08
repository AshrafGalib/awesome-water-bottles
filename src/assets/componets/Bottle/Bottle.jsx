import React from 'react';
import './Bottle.css'

const Bottle = ({bottle,handleToAddCart}) => {
    const {img,name,price,stock }= bottle
    return (
        <>
        
        <div className='card'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h3>Price : {price}$</h3>
            <h3>{stock} remaining.</h3>
            <button onClick={()=>handleToAddCart(bottle)}>Buy now</button>
        </div>
        </>
    );
};

export default Bottle;