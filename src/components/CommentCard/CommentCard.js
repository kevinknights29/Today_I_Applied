import React from "react";

const CommentCard = (comment) => {
  const { content, created_at } = comment.comment;

  // Convert the date format
  const formattedDate = new Date(created_at).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="comment-card">
      <span className="comment-content">{content}</span>
      <span>{formattedDate}</span>
    </div>
  );
};

export default CommentCard;
