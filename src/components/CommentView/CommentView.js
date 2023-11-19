import React, { useEffect, useState } from "react";
import supabase from "../../client/supabaseClient";
import CommentCard from "../CommentCard/CommentCard";
import useFetchComments from "../../hooks/useFetchComments";

const CommentView = ({ jobID }) => {
  const { comments, loading, error } = useFetchComments(jobID);

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

export default CommentView;
