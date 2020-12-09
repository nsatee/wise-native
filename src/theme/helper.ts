import tinycolor from 'tinycolor2';

export const lighten = (color: string, value: number) => {
  return tinycolor(color).lighten(value).toString();
};

export const darken = (color: string, value: number) => {
  return tinycolor(color).darken(value).toString();
};

export const brighten = (color: string, value: number) => {
  return tinycolor(color).brighten(value).toString();
};
