import React from "react";
import supabase from "../../client/supabaseClient";

const ReactionButton = ({ jobId, emoji, count, type }) => {
  const handleReaction = async () => {
    // Get Authenticated User ID
    const {
      data: { user },
    } = await supabase.auth.getUser();
    console.log(user.id);

    let { data: reaction, error } = await supabase
      .from("reactions")
      .select("id")
      .eq("job_id", jobId)
      .eq("user_id", user.id);
    console.log("Retrieved reaction:", reaction);

    if (error) {
      console.error(error);
    } else if (reaction.length === 0) {
      let { data: row, error } = await supabase
        .from("reactions")
        .insert({ job_id: jobId, user_id: user.id, type }, { upsert: true });
      if (error) {
        console.error(error);
      } else {
        console.log("Insert reaction successfully:", row);
      }
    } else {
      let { data: row, error } = await supabase
        .from("reactions")
        .update({ type })
        .eq("id", reaction[0].id)
        .select();
      if (error) {
        console.error(error);
      } else {
        console.log("Update reaction successfully:", row);
      }
    }
  };

  return (
    <button onClick={handleReaction}>
      {emoji} {count}
    </button>
  );
};

export default ReactionButton;
