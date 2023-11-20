import React from 'react';
import {formatDate} from '../../utils/dateUtils';

const CommentCard = ({comment: {content, created_at}}) => {
  const formattedDate = formatDate(created_at);

  return (
    <div className="comment-card">
      <span className="comment-content">{content}</span>
      <span>{formattedDate}</span>
    </div>
  );
};

export default React.memo(CommentCard);
