import {styled, css} from '../../theme';
import {Colors, Theme} from '../../theme/type';

interface Props {
  theme: Theme;
  bold?: boolean;
  underline?: boolean;
  align?: 'left' | 'center' | 'right';
  color?: Colors;
}

/*
  React native cannot leave value null.
*/

const CommonText = css<Props>`
  font-weight: ${({bold}) => (bold ? 'bold' : 'normal')};
  text-align: ${({align}) => (align ? align : 'auto')};
  text-decoration: ${({underline}) => underline && 'underline'};
  color: ${({theme, color}) => theme.colors[color || 'foreground']};
  font-style: normal;
`;

const HeaderText = css<Props>`
  ${CommonText}
  font-weight: bold;
`;

const h1 = styled.Text<Props>`
  ${HeaderText}
  font-size: 30px;
  line-height: 36px;
`;

const h2 = styled.Text<Props>`
  ${HeaderText}
  font-size: 22px;
  line-height: 30px;
`;

const h3 = styled.Text<Props>`
  ${HeaderText}
  font-size: 16px;
  line-height: 22px;
`;

const h4 = styled.Text<Props>`
  ${HeaderText}
  font-size: 14px;
  line-height: 22px;
`;

const body = styled.Text<Props>`
  ${CommonText}
  font-size: 14px;
  line-height: 22px;
`;

const display = styled(body)<Props>`
  line-height: 20px;
`;

const small = styled.Text<Props>`
  ${CommonText}
  font-size: 12px;
  line-height: 22px;
`;

const label = styled.Text<Props>`
  ${CommonText}
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 1px;
  line-height: 20px;
  text-transform: uppercase;
`;

const Text = {h1, h2, h3, h4, body, display, small, label};

export default Text;
