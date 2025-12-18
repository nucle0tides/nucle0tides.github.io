import { style, globalStyle } from '@vanilla-extract/css';
import { vars } from '../../styles/theme.css';

export const navigation = style({
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: vars.space.lg,
});

export const navLink = style({
  fontFamily: vars.font.display,
  fontSize: vars.fontSize.md,
  textDecoration: 'none',
  color: vars.color.text,
  ':hover': {
    color: vars.color.accentHover,
  },
});

export const navLinkDisabled = style({
  fontFamily: vars.font.display,
  fontSize: vars.fontSize.md,
  color: vars.color.textMuted,
  opacity: 0.4,
  cursor: 'default',
});

export const metaList = style({
  listStyleType: '"✿"',
  fontSize: vars.fontSize.sm,
  marginBottom: vars.space.lg,
  paddingLeft: vars.space.md,
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space.xs,
});

globalStyle(`${metaList} li::marker`, {
  color: vars.color.accentBright,
});

globalStyle(`${metaList} li`, {
  paddingLeft: vars.space.xs,
});

export const metaRow = style({
  marginBottom: vars.space.sm,
});

export const metaLabel = style({
  fontFamily: vars.font.display,
  fontWeight: 600,
  textDecoration: 'underline',
  textDecorationColor: vars.color.accentBright,
  textUnderlineOffset: '4px',
});

export const metaValue = style({
  fontFamily: vars.font.body,
});

export const content = style({
  marginBottom: vars.space.lg,
});

export const backLink = style({
  fontFamily: vars.font.body,
  fontSize: vars.fontSize.sm,
  color: vars.color.text,
  textDecoration: 'none',
  ':hover': {
    textDecoration: 'underline',
    textDecorationColor: vars.color.accentBright,
    textUnderlineOffset: '4px',
  },
});
