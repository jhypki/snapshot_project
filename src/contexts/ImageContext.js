import { key } from "../api/config";
import { useState, useEffect } from 'react';
import { createContext } from 'react';


const ImageContext = createContext();

function ImageContextProvider({ children }) {
    const [images, setImages] = useState([]);
    const [category, setCategory] = useState('All');
    const runSearch = (searchEntry) => {
        setCategory(searchEntry);
    }
    const [loading, setLoading] = useState(true);
    useEffect(()=> {
        const fetchImages = async () => {
            try{
                const response = await fetch(`https://api.unsplash.com/photos/random?client_id=${key}&count=20&query=${category}
                `);
                const data = await response.json();
                setLoading(false);
                setImages(data);
                console.log(data)
            }
            catch(error){
                console.log(error);
        }
    }
        fetchImages();
    }, [category]);

    return (
        <ImageContext.Provider value={{images, loading, category, runSearch}}>
            {children}
        </ImageContext.Provider>
    );
}

export { ImageContextProvider, ImageContext }
