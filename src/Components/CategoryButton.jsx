import React from 'react';
import { useContext } from 'react';
import { ImageContext } from '../contexts/ImageContext';
import { runSearch } from '../contexts/ImageContext';


function CategoryButton({ category }){
    const { runSearch } = useContext(ImageContext);
    return (
        <li>
        <button>{category}</button>
        </li>
    );
}

export default CategoryButton;