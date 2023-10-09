import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

const SingleProduct = ({handleAddProduct}) => {
  const { productId } = useParams();
  const [singleItem, setSingleItem] = useState({});

  useEffect(() => {
    console.log("Product number: ", productId);
    const fetchSingleItem = async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/${productId}`
        );
        const result = await response.json();
        console.log(result)
        setSingleItem(result);
      } catch (err) {
        console.log(err);
      }
    };
    fetchSingleItem();
  }, [productId]);


  if (!Object.keys(singleItem).length > 0) return <div>Product Not Found</div>

  return (
    <>
      <div className='single-product'>
          <div className="left-single-image">
            <img src={singleItem.image}/>
          </div>
          <div className="right-single-above-details">
            <h2>{singleItem.title}</h2>
            <p>{singleItem.rating?.rate} Star Rating / {singleItem.rating?.count} Reviews</p>
            <p>${singleItem.price}</p>
            <br/>
            <p>Sign up to qualify for Members Discounts</p>
            <br/>
            <br/>
            <Button 
              onClick={() => handleAddProduct(singleItem)}
              className='cart-plus' variant='success'>
                Add to Cart
              </Button>
            <br/>
            <div className="right-single-below-details">
              <p>{singleItem.description}</p>
            </div>

          </div>
      </div>
    </>
  )
}

export default SingleProduct;