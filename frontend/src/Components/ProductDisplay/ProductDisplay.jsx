import React from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { useContext,useState} from "react";
import { ShopContext } from "../../Context/ShopContext";
import plus_icon from "../Assets/plus-icon.png";
import minus_icon from "../Assets/minus_icon.png";
const ProductDisplay = ({ product }) => {
  const { addToCart ,removeFromCart,addToCartImmediate} = useContext(ShopContext);
  const [quantity, setQuantity] = useState(0);

  function updateCartCount() {
    addToCartImmediate(product.id, quantity);
  }

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            ${product.old_price}
          </div>
          <div className="productdisplay-right-price-new">
            ${product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus
          rerum molestiae nobis quos magni, cumque itaque minima reiciendis id
          rem iusto, neque accusamus doloribus soluta perferendis eius aliquam
          exercitationem deleniti.
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
          <div className="mention-quantity">
            <img src={minus_icon} alt="" onClick={() => {
                   const updatedQuantity = Math.max(0, quantity - 1);
                   setQuantity(updatedQuantity);
                  
                  removeFromCart(product.id)
                  }} />
            <input type="number" placeholder="0" id="quantityInput"  value={quantity} onChange={updateCartCount}></input>
            <p id="cartCount">{ 
            }</p>
            <img src={plus_icon} alt="" onClick={() => {
                    const updatedQuantity = quantity + 1;
                    setQuantity(updatedQuantity);
                    
                    addToCart(product.id)
                  }} />
          </div>
        </div>
        <button
          onClick={() => {
            addToCart(product.id);
          }}
        >
          ADD TO CART
        </button>
        <p className="productdisplay-right-category">
          <span>Category:</span> Women , T-Shirt, Crop Top
        </p>
        <p className="productdisplay-right-category">
          {" "}
          <span>Tag:</span> Modern,Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
