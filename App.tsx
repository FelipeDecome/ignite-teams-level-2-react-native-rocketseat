import { Roboto_400Regular, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';

import { Loading } from '@components/Loading';
import { NewGroup } from '@screens/NewGroup';
import { theme } from '@theme/index';

export default function App() {
  const [isLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  })

  return (
    <ThemeProvider theme={theme}>
      {isLoaded ? <NewGroup /> : <Loading />}
      <StatusBar
        barStyle="light-content"
        backgroundColor={'transparent'}
        translucent
      />
    </ThemeProvider>
  );
}
