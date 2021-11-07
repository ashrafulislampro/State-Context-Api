import React, { useContext, useEffect, useState } from 'react';
import { CategoryContext } from '../../App';
import CategoryDetails from '../CategoryDetails/CategoryDetails';
const allProducts = [
          {name: 'samsung', category : 'mobile'},{ name: 'Tecno', category : 'mobile'},{name: 'Walton', category : 'mobile'},
          {name: 'Asus', category : 'laptop'}, { name: 'Dell', category : 'laptop'}, {name: 'HP', category : 'laptop'},
          {name: 'Nikkon', category : 'camera'}, { name: 'Sony', category : 'camera'}, {name: 'Fuji', category : 'camera'}
]
const Categories = () => {
          const [category] = useContext(CategoryContext);
          const [products, setProducts] = useState([]);
          useEffect(() =>{
                    const matchProduct = allProducts.filter(pd => pd.category.toLowerCase() === category.toLowerCase());
                    setProducts(matchProduct);
          },[category])
          return (
                    <div>
                              <h2>Select Your Category :  {category}</h2>
                              {
                                        products.map(pd => <CategoryDetails product={pd}></CategoryDetails>)
                              }
                    </div>
          );
};

export default Categories;