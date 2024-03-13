import React from "react";
import CategoryButton from "./CategoryButton";

function CategoryBar() {
  return (
    <ul className="category-bar">
      <CategoryButton category="All" />
      <CategoryButton category="Mountains" />
      <CategoryButton category="Forests" />
      <CategoryButton category="Deserts" />
    </ul>
  );
}

export default CategoryBar;
