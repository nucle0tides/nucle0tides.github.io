import { createThemeContract, createTheme } from '@vanilla-extract/css';

export const vars = createThemeContract({
  color: {
    bg: null,
    text: null,
    textMuted: null,
    accent: null,
    accentBright: null,
    accentHover: null,
    secondary: null,
    surface: null,
    cardBg: null,
  },
  font: {
    body: null,
    display: null,
  },
  space: {
    none: null,
    xs: null,
    sm: null,
    md: null,
    lg: null,
    xl: null,
    '2xl': null,
  },
  radius: {
    sm: null,
    md: null,
    lg: null,
    full: null,
  },
  fontSize: {
    xs: null,
    sm: null,
    md: null,
    lg: null,
    xl: null,
  },
});

export const lightTheme = createTheme(vars, {
  color: {
    bg: '#ebebebff',
    text: '#1a1a1a',
    textMuted: '#666666',
    accent: '#D1E802',
    accentBright: '#E5FF00',
    accentHover: '#4a5500',
    secondary: '#4e51abff',
    surface: '#F5F3E4',
    cardBg: '#8c8ff2ff',
  },
  font: {
    body: '"IBM Plex Sans", sans-serif',
    display: '"Epilogue", sans-serif',
  },
  space: {
    none: '0',
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    '2xl': '48px',
  },
  radius: {
    sm: '4px',
    md: '8px',
    lg: '16px',
    full: '32px',
  },
  fontSize: {
    xs: '12px',
    sm: '12px',
    md: '16px',
    lg: '20px',
    xl: '28px',
  },
});
