import React, { useState } from "react";
import supabase from "../../client/supabaseClient";

const CommentBox = ({ jobID }) => {
  const [comment, setComment] = useState("");
  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = async (event) => {
    // Prevent the default form behavior
    event.preventDefault();
    console.log(`Comment: ${comment}`);

    // Get Authenticated User ID
    const {
      data: { user },
    } = await supabase.auth.getUser();
    console.log(user.id);

    // Insert a new comment
    const { data, error } = await supabase
      .from("comments")
      .insert([
        {
          user_id: user.id,
          job_id: jobID,
          content: comment,
        },
      ])
      .select();

    if (error) {
      console.error(error);
    } else {
      console.log("Comment inserted successfully:", data);
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
      />
      <span>{280 - comment.length}</span>
      <button type="submit">Submit</button>
    </form>
  );
};

export default CommentBox;
