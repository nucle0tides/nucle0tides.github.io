import { style, globalStyle } from '@vanilla-extract/css';
import { vars } from '../styles/theme.css';

export const navbar = style({
  background: vars.color.accent,
  borderRadius: vars.radius.md,
  padding: `${vars.space.sm} ${vars.space.lg}`,
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.md,
  justifyContent: "space-between",
  marginBottom: vars.space.lg,
  boxShadow: 'inset 0 -2px 0 rgba(0,0,0,0.1), 0 2px 8px rgba(0,0,0,0.1)',
});

export const logo = style({
  fontSize: vars.fontSize.lg,
  textDecoration: "none",
});

export const navLinks = style({
  display: 'flex',
  gap: vars.space.sm,
});

export const activeLink = style({});

globalStyle(`${navLinks} a`, {
  color: vars.color.text,
  textDecoration: 'none',
  fontFamily: vars.font.display,
  fontWeight: 400,
});

globalStyle(`${navLinks} a:hover`, {
  color: vars.color.accentHover,
  textDecoration: 'underline',
  textDecorationColor: vars.color.accentBright,
  textUnderlineOffset: '3px',
});

globalStyle(`${navLinks} a.${activeLink}`, {
  fontWeight: 'bold',
  textDecoration: 'underline',
  textDecorationColor: vars.color.accentBright,
  textUnderlineOffset: '3px',
});

export const separator = style({
  color: vars.color.text,
  userSelect: 'none',
});
