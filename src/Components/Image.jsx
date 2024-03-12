import React from "react";

function Image({ src, alt }) {
  return <div className='img-div'><img src={src} alt={alt} /></div>;
}

export default Image;