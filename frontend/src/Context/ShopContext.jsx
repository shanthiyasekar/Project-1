import React, { createContext, useEffect, useState } from "react";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < 300 + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [all_product, setAll_Product] = useState([]);
  const [cartItems, setCartItems] = useState(getDefaultCart());

  useEffect(() => {
    fetch("http://localhost:4000/allproducts")
      .then((response) => response.json())
      .then((data) => setAll_Product(data));

  }, []);

  useEffect(() => {
    // const retrieveCartItems = JSON.parse(localStorage.getItem("cartItems"));
    // if (retrieveCartItems) setCartItems(retrieveCartItems);

    if(localStorage.getItem('auth-token'))
    {
      fetch('http://localhost:4000/getcart',{
        method:"POST",
        headers:{
          Accept:'application/json',
          'auth-token':`${localStorage.getItem('auth-token')}`,
          'Content-Type':'application/json'
        },
        body:"",
      }).then((response)=>response.json())
      .then((data)=>setCartItems(data))

        console.log(cartItems);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    if (localStorage.getItem("auth-token")) {
      fetch("http://localhost:4000/addtocart", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "auth-token": `${localStorage.getItem("auth-token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ itemId: itemId }),
      })
      .then((response) => response.json())
      .then((data) => console.log(data));
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));

    if (localStorage.getItem("auth-token")) {
      fetch("http://localhost:4000/removefromcart", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "auth-token": `${localStorage.getItem("auth-token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ itemId: itemId }),
      })
      .then((response) => response.json())
      .then((data) => console.log(data));
    }

  };

  const addToCartImmediate = (itemId, quantity) => {
    setCartItems((prev) => ({ ...prev, [itemId]: quantity }));
    console.log(setCartItems);

    if (localStorage.getItem("auth-token")) {
      fetch("http://localhost:4000/addtocart", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "auth-token": `${localStorage.getItem("auth-token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ itemId: itemId }),
      })
      .then((response) => response.json())
      .then((data) => console.log(data));
    }
  };

  const addTotal = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_product.find((e) => e.id == Number(item));
        totalAmount += itemInfo.new_price * cartItems[item];
      }
    }
    // console.log(totalAmount);
    return totalAmount;
  };

  const getTotalCartItems = () => {
    let totalCartItems = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalCartItems += cartItems[item];
      }
    }
    return totalCartItems;
  };

  const contextValue = {
    all_product,
    addToCart,
    removeFromCart,
    cartItems,
    addTotal,
    getTotalCartItems,
    addToCartImmediate,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
