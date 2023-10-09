import { useState, useEffect } from "react";
import React from 'react'
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Jewelry = ({handleAddProduct}) => {
    const [jewelery, setJewelery] = useState([]);

    useEffect(() => {
        const fetchJewels = async () => {
          try {
            const response = await fetch(
              `https://fakestoreapi.com/products/category/jewelery`
            );
            const result = await response.json();
            setJewelery(result);
          } catch (err) {
            console.log(err);
          }
        };
        fetchJewels();
      }, []);

  return (
  
    <>
      <div>
          <h3>Jewelery</h3>
          {jewelery.map((product, key) => {
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
                    <br/>
                  </div>
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

export default Jewelry

// onClick={() => addToCart(product)}