import { Container, Image } from "./styles";

interface Props{
    src: string;
    title: string;
}

export function Comic({src, title}: Props){
    return(
        <Container>
            <Image src={src} alt={title} />
        </Container>
    );
}