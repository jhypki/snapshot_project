import React from "react";
import { useContext } from "react";
import { ImageContext } from "../contexts/ImageContext";
import { runSearch } from "../contexts/ImageContext";

function CategoryButton({ category }) {
  const { runSearch } = useContext(ImageContext);
  return (
    <li>
      <button value={category} onClick={(e) => runSearch(e.target.value)}>
        {category}
      </button>
    </li>
  );
}

export default CategoryButton;
