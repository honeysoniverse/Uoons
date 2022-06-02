import PropTypes from 'prop-types';
/**
 in future this should validate also if the user role is allowed
 */
const ProtectedRoute = ({ isProtected, component: RouteComponent, ...props }) => {
const isAuthenticated = false;

  if (isProtected && isAuthenticated) {
    return <RouteComponent {...props} />;
  }

  if (!isProtected && isAuthenticated) {
    return <RouteComponent {...props} />;
  }

  if (!isProtected && !isAuthenticated) {
    return <RouteComponent {...props} />;
  }
};

ProtectedRoute.propTypes = {
  isProtected: PropTypes.bool,
  component: PropTypes.elementType.isRequired,
};

ProtectedRoute.defaultProps = {
  isProtected: true,
};

export default ProtectedRoute;
