import { style } from '@vanilla-extract/css';
import { vars } from '../styles/theme.css';

export const article = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space.lg,
});

export const postHeader = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space.xs,
});

export const postTitle = style({
  fontFamily: vars.font.display,
  fontWeight: 800,
  fontSize: vars.fontSize.lg,
  textDecoration: 'underline',
  textDecorationColor: vars.color.accentBright,
  textUnderlineOffset: '4px',
});

export const postDate = style({
  fontSize: vars.fontSize.xs,
});
