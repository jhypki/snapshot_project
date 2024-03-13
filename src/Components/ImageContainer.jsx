import React from "react";
import Image from "./Image";
import { ImageContext } from "../contexts/ImageContext";
import Loading from "./Loading";
import NotFound from "./NotFound";

function ImageContainer() {
  const { images, loading } = React.useContext(ImageContext);

  console.log(images);
  return (
    <div className="image-container">
      {loading ? (
        <Loading />
      ) : images.length > 0 ? (
        images.map((image) => (
          <Image
            key={image.id}
            src={image.urls.regular}
            alt={image.alt_description}
          />
        ))
      ) : (
        <NotFound />
      )}
    </div>
  );
}

export default ImageContainer;
