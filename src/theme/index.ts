export const theme = {
  colors: {
    white: '#FFFFFF',
    gray: {
      100: '#E1E1E6',
      200: '#C4C4CC',
      300: '#7C7C8A',
      400: '#323238',
      500: '#29292E',
      600: '#202024',
      700: '#121214',
    },
    green: {
      500: '#00B37E',
      700: '#00875F',
    },
    red: {
      500: '#F75A68',
      700: '#AA2834',
    },
  },

  font: {
    family: {
      regular: 'Roboto_400Regular',
      bold: 'Roboto_700Bold',
    },
    size: {
      sm: 14,
      md: 16,
      lg: 18,
      xl: 24,
    },
  }
} as const;

export type Theme = typeof theme
