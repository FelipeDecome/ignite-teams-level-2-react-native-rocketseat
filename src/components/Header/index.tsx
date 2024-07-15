import { Container, Logo } from "./styles";

import logoSrc from '@assets/logo.png';

export function Header() {
  return (
    <Container>
      <Logo source={logoSrc} />
    </Container>
  )
}
