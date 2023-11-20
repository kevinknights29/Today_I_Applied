import React from 'react';
import {formatDate} from '../../utils/dateUtils';
import PropTypes from 'prop-types';

const CommentCard = ({comment: {content, created_at: createdAt}}) => {
  const formattedDate = formatDate(createdAt);

  return (
    <div className="comment-card">
      <span className="comment-content">{content}</span>
      <span>{formattedDate}</span>
    </div>
  );
};

CommentCard.propTypes = {
  comment: PropTypes.shape({
    content: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
  }).isRequired,
};

export default React.memo(CommentCard);
