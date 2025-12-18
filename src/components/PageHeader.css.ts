import { style } from '@vanilla-extract/css';
import { vars } from '../styles/theme.css';

export const pageTitle = style({
  fontFamily: vars.font.display,
  fontWeight: 800,
  textDecoration: 'underline',
  textDecorationColor: vars.color.accentBright,
  textUnderlineOffset: '4px',
});
