import PropTypes from 'prop-types';
import { StyledError } from './styles';

function Error({ error }) {
  return <StyledError>{error}</StyledError>;
}

Error.propTypes = {
  error: PropTypes.string.isRequired,
};
export default Error;
