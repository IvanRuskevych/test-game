import PropTypes from 'prop-types';
import { StyledButton } from './SpinButton.styled.js';

export const SpinButton = ({ text, ...props }) => {
  return <StyledButton {...props}>{text}</StyledButton>;
};

SpinButton.propTypes = {
  text: PropTypes.string.isRequired,
};
