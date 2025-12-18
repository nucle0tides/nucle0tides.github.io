import { globalStyle } from '@vanilla-extract/css';
import { vars } from './theme.css';

globalStyle('*', {
  boxSizing: 'border-box',
  margin: 0,
  padding: 0,
});

globalStyle('html, body', {
  minHeight: '100vh',
});

globalStyle('body', {
  fontFamily: vars.font.body,
  backgroundColor: vars.color.bg,
  color: vars.color.text,
  lineHeight: 1.6,
});

globalStyle('a', {
  color: vars.color.text,
  textDecoration: 'underline',
});

globalStyle('a:hover', {
  color: vars.color.secondary,
});
