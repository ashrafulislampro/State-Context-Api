import React, { useContext } from 'react';
import { CategoryContext } from '../App';
import Categories from './Categories/Categories';

const Header = () => {
          const category = useContext(CategoryContext);
          return (
                    <div style={{border: '1px solid purple'}}>
                              <h1>Header component : {category}</h1>
                              <Categories></Categories>
                    </div>
          );
};

export default Header;