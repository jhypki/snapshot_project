import React from "react";
import Image from "./Image";
import { ImageContext } from "../contexts/ImageContext";

function ImageContainer(    ) {
    const { images, loading } = React.useContext(ImageContext);
    console.log(images);
    return (<div className="image-container">
        {loading ? (
            <h1>Loading...</h1>
        ) : (
            images.map((image) => (
                <Image key={image.id} src={image.urls.regular} alt={image.alt_description} />
            ))
        )}
    </div>);
}

export default ImageContainer;