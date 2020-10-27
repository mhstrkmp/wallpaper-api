import "./App.css";
import ImagePreview from "./components/ImagePreview";
import getRandomImage from "./utils/api";

function App() {
  return (
    <main>
      <button onClick={() => getRandomImage()}>Get Random Image</button>
      <ImagePreview
        src={
          "https://images.unsplash.com/photo-1603614486387-276f74fcbe2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1947&q=80"
        }
        alt={"Newspaper reading"}
        author={"Matthias"}
      />
    </main>
  );
}

export default App;
