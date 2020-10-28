import { useState } from "react";
import "./App.css";
import ImagePreview from "./components/ImagePreview";
import getRandomImage from "./utils/api";

function App() {
  const [randomImage, setRandomImage] = useState(null);

  async function handleClick() {
    const randomImageObject = await getRandomImage();
    setRandomImage(randomImageObject);
  }

  function handleClickFavorites() {
    // randomImage holen
    // ID von random Image in constante
    // ID in localStorage packen
    console.log();
  }

  return (
    <main>
      <button onClick={() => handleClick()}>Get Random Image</button>
      {randomImage && (
        <ImagePreview
          id={randomImage.id}
          src={randomImage.urls.regular}
          alt={randomImage.alt_description}
          author={randomImage.user.name}
          clickFavorite={() => handleClickFavorites()}
        />
      )}
    </main>
  );
}

export default App;
