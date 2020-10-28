import React from "react";
import IconButton from "./IconButton";
import "./imagePreview.css";

export default function ImagePreview({ src, alt, author }) {
  return (
    <div className="imageContainer">
      <IconButton onClick={() => alert("Clicked")}>❤️</IconButton>
      <img className="imageThumb" src={src} alt={alt} />
      <p className="imageAuthor">Author: {author}</p>
    </div>
  );
}
