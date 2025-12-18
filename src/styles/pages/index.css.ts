import { style } from '@vanilla-extract/css';
import { vars } from '../theme.css';

export const postList = style({
  listStyle: 'none',
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space.lg,
});

export const postItem = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: vars.space.md,
});

export const postContent = style({
  display: 'flex',
  flexDirection: 'column',
});

export const postTitle = style({
  fontFamily: vars.font.display,
  fontWeight: 'bold',
  fontStyle: 'italic',
});

export const postExcerpt = style({
  fontWeight: 300,
  fontSize: vars.fontSize.xs,
  fontStyle: 'italic',
});

export const postDate = style({
  fontSize: vars.fontSize.xs,
  fontWeight: 300,
  color: vars.color.textMuted,
  whiteSpace: 'nowrap',
});
