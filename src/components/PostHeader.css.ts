import { style } from '@vanilla-extract/css';
import { vars } from '../styles/theme.css';

export const headerWrapper = style({
  position: 'relative',
  marginTop: `calc(-1 * ${vars.space.lg})`,
  marginLeft: `calc(-1 * ${vars.space.lg})`,
  marginRight: `calc(-1 * ${vars.space.lg})`,
  height: '200px',
  overflow: 'hidden',
  borderTopLeftRadius: vars.radius.lg,
  borderTopRightRadius: vars.radius.lg,
  borderBottomLeftRadius: '0',
  borderBottomRightRadius: '0',
});

export const headerImage = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

export const titleOverlay = style({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const titleGroup = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const title = style({
  fontFamily: vars.font.display,
  fontWeight: 800,
  fontSize: vars.fontSize.xl,
  color: '#fff',
  textAlign: 'center',
  textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
  textDecoration: 'underline',
  textDecorationColor: vars.color.accentBright,
  textUnderlineOffset: '4px',
});

export const date = style({
  color: '#fff',
  fontSize: vars.fontSize.xs,
  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)',
});
