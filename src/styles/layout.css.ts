import { style } from '@vanilla-extract/css';
import { vars } from './theme.css';

export const container = style({
  maxWidth: '600px',
  margin: '0 auto',
  padding: vars.space.xl,
  paddingLeft: vars.space.md,
  paddingRight: vars.space.md,
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
});
