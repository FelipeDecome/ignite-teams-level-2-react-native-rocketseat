
import { useNavigation } from '@react-navigation/native';

import logoSrc from '@assets/logo.png';

import { BackButton, BackIcon, Container, Logo } from "./styles";

interface IHeaderProps {
  showBackButton?: boolean;
}

export function Header({ showBackButton = false }: IHeaderProps) {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.navigate("groups");
  }

  return (
    <Container>
      {showBackButton && (
        <BackButton onPress={handleGoBack}>
          <BackIcon />
        </BackButton>
      )}

      <Logo source={logoSrc} />
    </Container>
  )
}
