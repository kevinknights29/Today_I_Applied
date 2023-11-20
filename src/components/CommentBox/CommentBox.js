import React, {useState} from 'react';
import supabase from '../../client/supabaseClient';
import {getCurrentUserId} from '../../client/supabaseAuth';

const CommentBox = ({jobID}) => {
  const [comment, setComment] = useState('');
  const [feedback, setFeedback] = useState('');
  const maxCommentLength = 280;

  const handleCommentChange = (event) => {
    if (event.target.value.length <= maxCommentLength) {
      setComment(event.target.value);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!comment.trim()) {
      setFeedback('Comment cannot be empty');
      return;
    }

    const userID = await getCurrentUserId();
    if (!userID) {
      setFeedback('You must be logged in to post a comment');
      return;
    }

    const {error} = await supabase.from('comments').insert([
      {
        user_id: userID,
        job_id: jobID,
        content: comment,
      },
    ]);

    if (error) {
      console.error(error.message);
      setFeedback('Failed to post comment. Please try again.');
    } else {
      console.log('Comment inserted successfully!');
      setFeedback('Comment posted successfully.');
      setComment('');
    }
  };

  return (
    <form className="comment-box" onSubmit={(event) => handleSubmit(event)}>
      <input
        id="comment"
        name="comment"
        value={comment}
        type="text"
        placeholder="Leave a Comment"
        onChange={(event) => handleCommentChange(event)}
        maxLength={maxCommentLength}
      />
      <span>{280 - comment.length}</span>
      <button type="submit">Submit</button>
      {feedback && <div className="feedback-message">{feedback}</div>}{' '}
    </form>
  );
};

export default CommentBox;
