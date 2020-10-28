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

  return (
    <main>
      <button onClick={() => handleClick()}>Get Random Image</button>
      {randomImage && (
        <ImagePreview
          src={randomImage.urls.regular}
          alt={randomImage.alt_description}
          author={randomImage.user.name}
        />
      )}
    </main>
  );
}

export default App;
