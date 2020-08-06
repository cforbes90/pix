import "./ImageList.css";

import React from "react";
import ImageCard from "./ImageCard";
const ImageList = (props) => {
  //   console.log(props.images);
  //We can destructure the return so we don't have to put image.DOT.id, imageDOT.description
  //To do this we need to add in those curly braces
  const images = props.images.map((image) => {
    //We are sending image as a prop down to ImageCard
    return <ImageCard key={image.id} image={image} />;
  });
  return <div className="image-list"> Image List: {images}</div>;
};

export default ImageList;
