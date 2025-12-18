import { style, globalStyle } from '@vanilla-extract/css';
import { vars } from '../../theme.css';

export const monthSection = style({
  marginBottom: vars.space.lg,
});

export const monthTitle = style({
  fontFamily: vars.font.display,
  fontSize: vars.fontSize.md,
  textDecoration: 'underline',
  textDecorationColor: vars.color.accentBright,
  textUnderlineOffset: '4px',
  marginBottom: vars.space.sm,
});

export const changelogList = style({
  listStyleType: '"✿"',
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space.sm,
  paddingLeft: vars.space.md,
});

globalStyle(`${changelogList} li::marker`, {
  color: vars.color.accentBright,
});

export const changelogEntry = style({
  fontWeight: 300,
  fontSize: vars.fontSize.sm,
  paddingLeft: vars.space.sm,
});
