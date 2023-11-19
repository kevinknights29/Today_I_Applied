import React, { useState } from "react";

const CommentBox = () => {
  const [comment, setComment] = useState("");
  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  return (
    <form className="comment-box">
      <input
        id="comment"
        name="comment"
        value={comment}
        type="text"
        placeholder="Leave a Comment"
        onChange={(event) => handleCommentChange(event)}
      />
      <span>{280 - comment.length}</span>
      <button type="submit">Submit</button>
    </form>
  );
};

export default CommentBox;
