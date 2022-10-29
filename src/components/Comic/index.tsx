import { Container, Title, Image } from "./styles";

interface Props {
  src: string;
  title: string;
}

export function Comic({ src, title }: Props) {
  return (
    <Container>
      <Image src={src} alt={title} />
      <Title>{title}</Title>
    </Container>
  );
}
