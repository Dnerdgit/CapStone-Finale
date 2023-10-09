import './styles/products.css'
import { useState, useEffect } from 'react';
import { set } from 'react-hook-form';
// import Rate from '../Ratings/Rate';
import { Link } from 'react-router-dom'
import SorterPage from './SorterPage'
import Searchbar from './Searchbar';

export default function AllProducts({handleAddProduct}) {
    const [word, setWord] = useState("")
    const [items, setItems] = useState([]);
    
    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                const result = await response.json();
                setItems(result);
            } catch (error) {
                console.log(error);
            }   
        };
        fetchItems();
        
    }, [])

    const handleSortChange = (props) => {
        const sortItems = [...filteringItems];
        if (props === "ascending") {
            sortItems.sort((a, b) => a.title.localeCompare(b.title));
          } else if (props === "descending") {
            sortItems.sort((a, b) => b.title.localeCompare(a.title));
        }
        OnSort(sortItems);
    
    }

    const filteringItems = word ? items.filter((product) => 
                product.title.toLowerCase().includes(word.toLowerCase())
                ) : items;
    
    return (
       <>
            <div className="organized-items">
                    <SorterPage onSort={handleSortChange}/>
                    <br/>
                    <Searchbar 
                        placeholder="Find Product"
                        data={AllProducts}
                        word={word} setWord={setWord}
                        />
                </div> 
                <br/>
                <br/>       
          
            <div className='all-prods'>
                <section className='container'>
                
                    {filteringItems.map((product, key) => (
                        <div key={key} className="product-card">
                            <main key={product.id} className='product-id'>
                            <Link to={`/products/${product.id}`}>
                           
                                <img src={product.image}
                                    className='product-image'
                                    alt={product.title}
                                    />
                         
                            </Link>
                            <h4>{product.title}</h4>

                            <li>
                                {product.rating.rate} Star Rating  {product.rating.count} (Customer Reviews)
                                {/* <Rate {...product.rating.rate}> Star Rating </Rate> {product.rating.count} (Customer Reviews) */}
                            </li>
                            <li>
                                ${product.price}
                            </li>
                            <br/>
                            <button 
                                onClick={() => handleAddProduct(product)} 
                                className='add-to'>Add to Cart
                            </button>
                            </main>
                        </div>       
                    ))}
                
                </section>
            </div>
   
     </>
    )

}


//onClick={handleAddProduct(filteringItems)}
 // <main key={product.id} className="all-items"/>
                            // <li>{product.title}</li>