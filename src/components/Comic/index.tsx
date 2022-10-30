import {
  Container,
  Title,
  Image,
  Description,
  FlipperCard,
  BackInfo,
} from "./styles";

interface Props {
  src: string;
  title: string;
  description: string;
}

export function Comic({ src, title, description }: Props) {
  return (
    <Container>
      <FlipperCard id="flipper">
        <Image src={src} alt={title} />
        <BackInfo>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </BackInfo>
      </FlipperCard>
    </Container>
  );
}
