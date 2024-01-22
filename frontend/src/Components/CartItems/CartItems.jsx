import React, { useContext } from "react";
import "./CartItems.css";
import remove_icon from "../Assets/cart_cross_icon.png";
import { ShopContext } from "../../Context/ShopContext";
import plus_icon from "../Assets/plus-icon.png";
const CartItems = () => {
  const { addTotal, all_product, cartItems, removeFromCart, addToCart } =
    useContext(ShopContext);
  return (
    <div className="cartItems">
      <div className="cartItems-display-title">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
        <p>Add</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <>
              <div className="displayProducts cartItems-display">
                <img className="productImage" src={e.image} alt="" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="cart-items-quantity">
                  {cartItems[e.id]}
                </button>
                <p className="total-amount">${e.new_price * cartItems[e.id]}</p>
                <img
                  className="cart-items-remove-icon"
                  src={remove_icon}
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                  alt=""
                />
                <img
                  className="cart-items-add-icon"
                  src={plus_icon}
                  onClick={() => {
                    addToCart(e.id);
                  }}
                  alt=""
                />
              </div>
              <hr />
            </>
          );
        }
        return null;
      })}

      <div className="cartItems-down">
        <div className="cartItems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="subTotal">
              <p>Subtotal</p>
              <p>${addTotal()}</p>
            </div>
            <hr />
            <div className="subTotal">
              <p>Shipping fee</p>
              <p>Free</p>
            </div>
            <hr />

            <div className="subTotal">
              <p>Total</p>
              <p>${addTotal()}</p>
              {console.log(addTotal())}
            </div>
          </div>

          <button>PROCEED TO CHECKOUT</button>
        </div>

        <div className="enter-promo-code">
          <p>If you have a promo code,Enter it here</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder="promo code"></input>
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
