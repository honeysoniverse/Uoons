import { colors } from '../../../resources/colors';
import { INPUT_FIELD_HEIGHT } from '../constants';

export const Button = {
  variants: {
    verification: {
      bg: colors.viking,
      padding: '16px',
      borderRadius: 24,
      textColor: colors.white,
      fontSize: 15,
      height: INPUT_FIELD_HEIGHT,
      width: '100px',
    },
    next: {
      bg: colors.radianceBlue,
      textColor: 'white',
      borderRadius: 24,
      height: INPUT_FIELD_HEIGHT,
      fontSize: 15,
      minWidth: '108px',
    },
    back: {
      bg: colors.silverChalice,
      textColor: 'white',
      borderRadius: 24,
      height: INPUT_FIELD_HEIGHT,
      fontSize: 15,
      minWidth: '108px',
    },
  },
};
