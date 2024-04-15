import PropTypes from 'prop-types';
import { StyledList } from './ReelList.styled.js';
import ReelItem from '../ReelItem/ReelItem.jsx';

const ReelList = ({ items }) => {
  const selectedItems = items.slice(0, 3);

  return (
    <StyledList>
      {selectedItems.map(({ id, content }) => (
        <ReelItem key={id} content={content} />
      ))}
    </StyledList>
  );
};

ReelList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ReelList;
