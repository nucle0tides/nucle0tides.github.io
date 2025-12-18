import { style } from '@vanilla-extract/css';
import { vars } from '../styles/theme.css';

export const contentCard = style({
  background: vars.color.cardBg,
  borderRadius: vars.radius.lg,
  padding: vars.space.lg,
  flex: 1,
  boxShadow: 'inset 0 -2px 0 rgba(0,0,0,0.1), 0 2px 8px rgba(0,0,0,0.1)',
});
