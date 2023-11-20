import React from 'react';
import CommentCard from '../CommentCard/CommentCard';
import useFetchComments from '../../hooks/useFetchComments';
import PropTypes from 'prop-types';

const CommentView = ({jobID}) => {
  const {comments, loading, error} = useFetchComments(jobID);

  if (loading) return <div>Loading comments...</div>;
  if (error) return <div>Error fetching comments: {error}</div>;

  return (
    <div className="comments">
      {comments.length === 0 ? (
        <span>No comments yet</span>
      ) : (
        <ul>
          {comments.map((comment) => (
            <li key={comment.id}>
              <CommentCard comment={comment} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

CommentView.propTypes = {
  jobID: PropTypes.string.isRequired,
};

export default CommentView;
