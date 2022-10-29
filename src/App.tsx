import axios from "axios";
import { useEffect, useState } from "react";
import { Comic } from "./components/Comic";
import { Container } from "./styles/main";

interface ComicProps {
  id: string;
  title: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}
function App() {
  const [comics, setComics] = useState<ComicProps[]>([]);

  async function getData() {
    try {
      const allComics = await axios.get(
        `http://gateway.marvel.com/v1/public/comics?ts=1&apikey=${
          import.meta.env.VITE_PUBLIC_KEY
        }&hash=${import.meta.env.VITE_HASH}`
      );
      setComics(allComics?.data?.data?.results);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <Container>
      {comics.map(({ id, title, thumbnail }) => {
        const imageIsNotAvailable = !thumbnail.path.includes(
          "image_not_available"
        );
        if (imageIsNotAvailable) {
          return (
            <Comic
              key={id}
              src={thumbnail.path + "." + thumbnail.extension}
              title={title}
            />
          );
        }
      })}
    </Container>
  );
}

export default App;
