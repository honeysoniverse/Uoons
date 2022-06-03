import { colors } from '../../resources/colors';

export const Text = {
  variants: {
    pageTitle: {
      textAlign: 'center',
      fontSize: {
        base: '24px', sm: '28px', md: '32px', lg: '36px', xl: '42px',
      },
      fontWeight: '700',
      textColor: colors.azureRadianceBlue,
      marginTop: '32px',
      marginBottom: '32px',
    },
    heading1: {
      textAlign: 'left', // left, right
      fontSize: '24px', // font size
      fontWeight: '600', // bold, italic
      textColor: '#313131', // which ever color
      marginTop: '16px',
      marginBottom: '16px',
      lineHeight: '28px',
    },
    heading2: {
      textAlign: 'center', // left, right
      fontSize: '18px', // font size
      fontWeight: '600', // bold, italic
      textColor: '#313131', // which ever color
      marginTop: '10px',
      marginBottom: '8px',
      lineHeight: '22px',
    },
    heading3: {
      textAlign: 'left', // left, right
      fontSize: '12px', // font size
      fontWeight: '600', // bold, italic
      textColor: '#313131', // which ever color
      marginTop: '4px',
      marginBottom: '2px',
      lineHeight: '16px',
    },
    boldQuestion: {
      textAlign: 'center', // left, right
      fontSize: '24px', // font size
      fontWeight: 'bold', // bold, italic
      textColor: '#61D3D1', // which ever color
      lineHeight: '24px',
      marginTop: '16px',
      marginBottom: '16px',
    },
  },
};
