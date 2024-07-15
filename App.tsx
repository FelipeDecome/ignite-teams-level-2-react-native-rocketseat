import { Roboto_400Regular, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto';
import { ThemeProvider } from 'styled-components/native';

import { Loading } from '@components/Loading';
import { Groups } from '@screens/Groups';
import { theme } from '@theme/index';

export default function App() {
  const [isLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  })

  return (
    <ThemeProvider theme={theme}>
      {isLoaded ? <Groups /> : <Loading />}
    </ThemeProvider>
  );
}
