import {css, styled} from '../../theme';
import {darken} from '../../theme/helper';
import {MainColors, Theme} from '../../theme/type';

type Props = {
  variant?: MainColors;
  sizeType?: 'md' | 'sm' | 'xs';
  rounded?: boolean;
  disabled?: boolean;
  square?: boolean;
  fullWidth?: boolean;
  active?: boolean;
  paddingType?: 'none' | 'lg' | 'xs' | 'sm';
  ghost?: boolean;
  bordered?: boolean;
};

const setColor = (
  theme: Theme,
  args: {variant?: MainColors; ghost?: boolean; bordered?: boolean},
) => {
  const color = args.variant || 'primary';
  if (args.variant) {
    if (args.ghost) {
      return {
        background: theme.colors.background2,
        border: theme.colors.transparent,
        color: theme.colors[color],
        hover: {
          background: theme.colors[color],
          border: theme.colors[color],
          color: theme.colors.background,
        },
      };
    }
    if (args.bordered) {
      return {
        background: theme.colors.transparent,
        border: theme.colors[color],
        color: theme.colors[color],
        hover: {
          background: theme.colors[color],
          border: theme.colors[color],
          color: theme.colors.background,
        },
      };
    }
  }

  return {
    background: theme.colors[color],
    border: theme.colors[color],
    color: theme.colors.background,
    hover: {
      background: darken(theme.colors[color], 10),
      border: darken(theme.colors[color], 10),
      color: theme.colors.background,
    },
  };
};

const Button = styled.TouchableOpacity<Props>`
  ${({theme, variant, ghost, bordered, fullWidth}) => css`
    background-color: ${setColor(theme, {variant, ghost, bordered}).background};
    border: 2px solid ${setColor(theme, {variant, ghost, bordered}).border};
    color: ${setColor(theme, {variant, ghost, bordered}).color};
    border-radius: ${theme.corner.lg};
    height: ${theme.spacing.xxl_8};
    padding: 0 ${theme.spacing.xxl_4};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: ${fullWidth ? '100%' : 'auto'};
  `}
`;

export default Button;
