import { style, keyframes } from '@vanilla-extract/css';
import { vars } from '../styles/theme.css';

const scroll = keyframes({
  '0%': { transform: 'translateX(0)' },
  '100%': { transform: 'translateX(-50%)' },
});

export const currentsWrapper = style({
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  marginBottom: vars.space.lg,
});

export const currentsTrack = style({
  display: 'inline-block',
  animation: `${scroll} 30s linear infinite`,
  fontSize: vars.fontSize.sm,
  fontStyle: 'italic',
  selectors: {
    [`${currentsWrapper}:hover &`]: {
      animationPlayState: 'paused',
    },
  },
});

export const currentKey = style({
  fontWeight: 'bold',
  fontFamily: vars.font.display,
});

export const separator = style({
  margin: `0 ${vars.space.sm}`,
});

export const currentsContent = style({
  display: 'inline-block',
});

export const currentLink = style({
  color: vars.color.text,
  textDecoration: 'none',
  selectors: {
    [`${currentsWrapper}:hover &`]: {
      color: vars.color.accentBright,
      background: vars.color.text,
      padding: `${vars.space.xs} ${vars.space.sm}`,
      borderRadius: vars.radius.sm,
    },
  },
});
