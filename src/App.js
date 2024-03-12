import Header from './Components/Header.jsx';
import SearchBar from './Components/SearchBar.jsx';
import CategoryBar from './Components/CategoryBar.jsx';
import ImageContainer from './Components/ImageContainer.jsx';
import Image from './Components/Image.jsx';
import { ImageContextProvider, ImageContext, runSearch } from "./contexts/ImageContext";
import { useContext } from "react";
import { useState } from "react";
import Search from './Components/Search.jsx';



function App() {
  const [category, setCategory] = useState('All');
  const { runSearch } = useContext(ImageContext);

  const handleSearch = (e, searchEntry) => {
    e.preventDefault();
    setCategory(searchEntry);
    console.log(searchEntry)
  }
  return (
  
    <div className='wrapper'>
    <Header/>
    <SearchBar handleSearch={handleSearch}/>
    <CategoryBar/>
    <Search searchTerm={category}/>
    <ImageContainer category={category}/>
    </div>
    
  );
}

export default App;
