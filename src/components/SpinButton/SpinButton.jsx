import PropTypes from 'prop-types';
import { StyledButton } from './SpinButton.styled.js';

export const SpinButton = ({ text, onClick }) => {
  return <StyledButton onClick={onClick}>{text}</StyledButton>;
};

SpinButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
