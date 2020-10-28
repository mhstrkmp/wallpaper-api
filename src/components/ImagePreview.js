import React from "react";
import IconButton from "./IconButton";
import "./imagePreview.css";

export default function ImagePreview({ src, alt, author, id }) {
  return (
    <div className="imageContainer">
      <IconButton
        onClick={() => {
          let favorites = null;
          try {
            favorites = JSON.parse(localStorage.getItem("favorites")) || [];
          } catch (error) {
            // Parsing might fail
            console.log(error);
            favorites = [];
          }
          if (favorites.includes(id)) {
            // Already added to favorites
            return;
          }
          const newFavorites = [...favorites, id];
          localStorage.setItem("favorites", JSON.stringify(newFavorites));
        }}
      >
        ❤️
      </IconButton>
      <img className="imageThumb" src={src} alt={alt} />
      <p className="imageAuthor">Author: {author}</p>
    </div>
  );
}
