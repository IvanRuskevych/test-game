import PropTypes from 'prop-types';
import { StyledItem } from './ReelItem.styled.js';

const ReelItem = ({ content, ...props }) => {
  return <StyledItem {...props}>{content}</StyledItem>;
};

ReelItem.propTypes = {
  content: PropTypes.string.isRequired,
};

export default ReelItem;
