const getCartFromLocalStorage =()=>{
    const storedCartString= localStorage.getItem('cart')
    if(storedCartString){
        const storedCart =JSON.parse(storedCartString)
        return storedCart
    }
    return []
}

const setCartToLocalStorage =(id)=>{
    const cart = getCartFromLocalStorage()
    cart.push(id)
    const cartStringified =JSON.stringify(cart)
    localStorage.setItem('cart',cartStringified) 
}

export{getCartFromLocalStorage,setCartToLocalStorage}