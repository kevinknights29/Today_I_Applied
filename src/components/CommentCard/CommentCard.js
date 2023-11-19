import React from "react";

const CommentCard = ({ content, created_at }) => {
  return (
    <div className="comment-card">
      <span>{content}</span>
      <span>{created_at}</span>
    </div>
  );
};

export default CommentCard;
