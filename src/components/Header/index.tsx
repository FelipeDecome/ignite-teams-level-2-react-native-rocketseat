
import logoSrc from '@assets/logo.png';

import { BackButton, BackIcon, Container, Logo } from "./styles";

interface IHeaderProps {
  showBackButton?: boolean;
}

export function Header({ showBackButton = false }: IHeaderProps) {
  return (
    <Container>
      {showBackButton && (
        <BackButton>
          <BackIcon />
        </BackButton>
      )}

      <Logo source={logoSrc} />
    </Container>
  )
}
