import defaultStyled, {
  ReactNativeStyledInterface,
} from 'styled-components/native';
import {css as defaultCss, ThemedCssFunction} from 'styled-components';

import colors from './colors';
import corner from './corner';
import extra from './extra';
import lineHeight from './lineHeight';
import padding from './padding';
import spacing from './spacing';
import {Theme} from './type';

export const lightTheme = {
  colors,
  padding,
  spacing,
  lineHeight,
  corner,
  extra,
};

export const styled = (defaultStyled as unknown) as ReactNativeStyledInterface<Theme>;
export const css = defaultCss as ThemedCssFunction<Theme>;
