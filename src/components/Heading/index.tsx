import { Container, Subtitle, Title } from "./styles";

interface IHeadingProps {
  subtitle: string;
  title: string;
}

export function Heading({ subtitle, title }: IHeadingProps) {
  return (
    <Container>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  )
}
