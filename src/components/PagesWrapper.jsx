import PropTypes from 'prop-types';
import { useBreakpointValue, VStack } from '@chakra-ui/react';
import { colors } from '../resources/colors';

const PagesWrapper = ({id, children}) => {
  const isMdBreakpoint = useBreakpointValue(
    {
      md: true, base: false,
    },
  );

  return (
    <VStack
    
      fontFamily="Roboto"
      id={id}
      bg={colors.backgroundGray}
      alignItems="center"
      justifyContent="center"
      paddingTop="50px"
      paddingBottom="50px"
      paddingLeft={isMdBreakpoint ? '50px' : '8px'}
      paddingRight={isMdBreakpoint ? '50px' : '8px'}
      height="100vh"
      width="100vw"
    >
      {children}
    </VStack>
  );
};

PagesWrapper.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.instanceOf(Array),
};

PagesWrapper.defaultProps = {
  children: [],
};

export default PagesWrapper;
