import { useState, useEffect } from "react";
import React from 'react'
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const MensClothing = ({handleAddProduct}) => {
    const [mensClothing, setmensClothing] = useState([]);
  
    useEffect(() => {
      const fetchmensClothing = async () => {
        try {
          const response = await fetch(
            `https://fakestoreapi.com/products/category/men's clothing`
          );
          const result = await response.json();
          setmensClothing(result);
        } catch (err) {
          console.log(err);
        }
      };
      fetchmensClothing();
    }, []);
    
  return (
  
    <>
    <div className="product-section">
        <h3>Men's Clothing</h3>
        {mensClothing.map((product, key) => {
          return (
            <div key={key} className='single-product'>
              <Link to={`/products/${product.id}`}>
                <div className="left-single-image">
                  <img src={product.image}/>
                </div>
                </Link>
                <div className="right-single-above-details">
                  <h2>{product.title}</h2>
                  <p>{product.rating.rate} Star Rating / {product.rating.count} Reviews</p>
                  <p>${product.price}</p>
                  <br/>
                  <p>Sign up to qualify for Members Discounts</p>
                  <br/>
                  <br/>
                  <Button 
                    onClick={() => handleAddProduct(product)} 
                    className='cart-plus'>Add to Cart
                    </Button>
                </div>
                  <br/>
                <div className="right-single-below-details">
                    <p>{product.description}</p>
                </div>
                
            </div>
          )
          })
        }
    </div>
  </>
      
  )
}

export default MensClothing

// onClick={() => addToCart(product)}