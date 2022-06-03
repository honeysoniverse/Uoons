import { extendTheme } from '@chakra-ui/react';
import { Button as buttonStyles } from './components/button';
import { Text as textStyles } from './components/text';
import { Image as imageStyles } from './components/image';
import { Link as linkStyles } from './components/link';
import { FormLabel as formLabelStyles } from './components/formLabel';
import { Select as selectStyles } from './components/select';
import { Input } from './components/input';

const theme = extendTheme({
  components: {
    Button: buttonStyles,
    Input,
    Text: textStyles,
    Image: imageStyles,
    Link: linkStyles,
    FormLabel: formLabelStyles,
    Select: selectStyles,
  },
  styles: {
    global: {
      html: {
        height: '100%',
        overflowY: 'scroll',
        whiteSpace: 'inherit',
        wordBreak: 'break-word',
        wordWrap: 'break-word',
        textSizeAdjust: '100%',
        mozOsxFontSmoothing: 'grayscale',
        webkitFontSmoothing: 'antialiased',
      },
      body: {
        display: 'flex',
        flexFlow: 'column nowrap',
        height: 'auto',
        margin: 0,
        minHeight: '100%',
        overflow: 'hidden',
      },
      '#root': {
        flex: 1,
        display: 'flex',
        flexFlow: 'column nowrap',
      },
    },
  },
  colors: {
    gray: {
      50: '#f5f5f5',
      100: '#ebebeb',
      200: '#d6d6d6',
      300: '#c2c2c2',
      400: '#adadad',
      500: '#999999',
      600: '#7a7a7a',
      700: '#5c5c5c',
      800: '#3d3d3d',
      900: '#1f1f1f',
    },
  },
  sizes: {
    container: {
      '2xl': '1536px',
    },
  },
});

export default theme;
