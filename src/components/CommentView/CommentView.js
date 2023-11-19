import React, { useEffect, useState } from "react";
import supabase from "../../client/supabaseClient";
import CommentCard from "../CommentCard/CommentCard";

const CommentView = ({ jobID }) => {
  // Define state for the jobs
  const [comments, setComments] = useState([]);

  // Fetch the jobs from the database when the component mounts
  useEffect(() => {
    const fetchComments = async () => {
      let { data: comments, error } = await supabase
        .from("comments")
        .select("id, content, created_at")
        .eq("job_id", jobID);

      if (error) {
        console.error(error);
      } else {
        console.log("Read comments successfully:", comments);
        setComments(comments);
      }
    };
    fetchComments();
  }, []);

  return (
    <div className="list">
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
