import PropTypes from 'prop-types';
import { StyledItem } from './ReelItem.styled.js';

export const ReelItem = ({ content }) => {
  return (
    <StyledItem>
      <img src={content} alt={'symbol image'} />
    </StyledItem>
  );
};

ReelItem.propTypes = {
  content: PropTypes.any,
};
