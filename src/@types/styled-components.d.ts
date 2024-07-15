// Styled components types
import { Theme } from '@theme/index';
import 'styled-components/native';

declare module 'styled-components/native' {
  export interface DefaultTheme extends Theme {}
}
