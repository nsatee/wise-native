import {DefaultTheme} from 'styled-components';
import colors from './colors';
import corner from './corner';
import extra from './extra';
import lineHeight from './lineHeight';
import padding from './padding';
import spacing from './spacing';

export type Colors = keyof typeof colors;
export type MainColors =
  | 'primary'
  | 'secondary'
  | 'background'
  | 'foreground'
  | 'success'
  | 'error';

export interface Theme extends DefaultTheme {
  colors: typeof colors;
  padding: typeof padding;
  spacing: typeof spacing;
  lineHeight: typeof lineHeight;
  corner: typeof corner;
  extra: typeof extra;
}
