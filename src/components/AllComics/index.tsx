import axios from "axios";
import { useEffect, useState } from "react";
import { Comic } from "../Comic";
import { Container } from "./styles";

interface ComicProps {
  id: string;
  title: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

interface Props{
    limit: string;
}
export function AllComics({limit}: Props) {
  const [comics, setComics] = useState<ComicProps[]>([]);

  async function getData() {
    try {
      const {
        data: { data },
      } = await axios.get(
        `http://gateway.marvel.com/v1/public/comics?ts=1&apikey=${
          import.meta.env.VITE_PUBLIC_KEY
        }&hash=${import.meta.env.VITE_HASH}&limit=${limit}`
      );
      setComics(data?.results);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, [limit]);
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
