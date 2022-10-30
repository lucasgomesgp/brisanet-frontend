import axios from "axios";
import { useEffect, useState } from "react";
import { NoDataText } from "../../styles/main";
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

interface Props {
  limit: string;
  hero?: string;
}
export function AllComics({ limit, hero = "" }: Props) {
  const [comics, setComics] = useState<ComicProps[]>([]);
  async function getData() {
    try {
      let url = `http://gateway.marvel.com/v1/public/comics?ts=1&apikey=${
        import.meta.env.VITE_PUBLIC_KEY
      }&hash=${import.meta.env.VITE_HASH}&limit=${limit}`;
      if (hero) {
        url = url.concat(`&titleStartsWith=${hero}`);
      }
      const {
        data: { data },
      } = await axios.get(url);
      setComics(data?.results);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, [limit, hero]);
  return (
    <Container>
      {comics.length > 0 ? (
        comics.map(({ id, title, thumbnail, description }) => {
          const imageIsNotAvailable = !thumbnail.path.includes(
            "image_not_available"
          );
          if (imageIsNotAvailable) {
            return (
              <Comic
                key={id}
                src={thumbnail.path + "." + thumbnail.extension}
                title={title}
                description={description}
              />
            );
          }
        })
      ) : (
        <NoDataText>No comics found!</NoDataText>
      )}
    </Container>
  );
}
