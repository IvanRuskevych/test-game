import PropTypes from 'prop-types';
import { StyledButton } from './SpinButton.styled.js';

const SpinButton = ({ text, ...props }) => {
  return <StyledButton {...props}>{text}</StyledButton>;
};

SpinButton.propTypes = {
  text: PropTypes.string.isRequired,
};

export default SpinButton;
