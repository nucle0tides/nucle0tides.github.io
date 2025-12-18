import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles';
import { vars } from './theme.css';

const responsiveProperties = defineProperties({
  properties: {
    display: ['none', 'flex', 'block', 'inline', 'inline-flex'],
    flexDirection: ['row', 'column'],
    alignItems: ['stretch', 'flex-start', 'center', 'flex-end', 'baseline'],
    justifyContent: ['stretch', 'flex-start', 'center', 'flex-end', 'space-between', 'space-around'],
    gap: vars.space,
    padding: vars.space,
    paddingTop: vars.space,
    paddingBottom: vars.space,
    paddingLeft: vars.space,
    paddingRight: vars.space,
    margin: vars.space,
    marginTop: vars.space,
    marginBottom: vars.space,
    marginLeft: vars.space,
    marginRight: vars.space,
    borderRadius: vars.radius,
    fontSize: vars.fontSize,
    textAlign: ['left', 'center', 'right'],
    fontWeight: ['normal', 'bold'],
    fontStyle: ['normal', 'italic'],
  },
  shorthands: {
    p: ['padding'],
    px: ['paddingLeft', 'paddingRight'],
    py: ['paddingTop', 'paddingBottom'],
    pt: ['paddingTop'],
    pb: ['paddingBottom'],
    pl: ['paddingLeft'],
    pr: ['paddingRight'],
    m: ['margin'],
    mx: ['marginLeft', 'marginRight'],
    my: ['marginTop', 'marginBottom'],
    mt: ['marginTop'],
    mb: ['marginBottom'],
    ml: ['marginLeft'],
    mr: ['marginRight'],
  },
});

const colorProperties = defineProperties({
  properties: {
    color: vars.color,
    background: vars.color,
    backgroundColor: vars.color,
  },
});

export const sprinkles = createSprinkles(responsiveProperties, colorProperties);

export type Sprinkles = Parameters<typeof sprinkles>[0];
