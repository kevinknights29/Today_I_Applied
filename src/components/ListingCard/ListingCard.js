import React, { useState, useEffect } from "react";
import supabase from "../../client/supabaseClient";
import JobDetails from "../JobDetails/JobDetails";
import ReactionButton from "../ReactionButton/ReactionButton";
import CommentBox from "../CommentBox/CommentBox";
import CommentView from "../CommentView/CommentView";
import useFetchReactions from "../../hooks/useFetchReactions";

const ListingCard = ({ job }) => {
  const {
    id,
    role: roleName,
    company: companyName,
    url: applicationUrl,
    location,
    tags,
  } = job;
  const { reactions, loading, error } = useFetchReactions(id);
  const [applications, setApplications] = useState(0);
  const [show, setShow] = useState(false);

  const handleReaction = async (type) => {
    // Get Authenticated User ID
    const {
      data: { user },
    } = await supabase.auth.getUser();
    console.log(user.id);

    let { data: reaction, error } = await supabase
      .from("reactions")
      .select("id")
      .eq("job_id", id)
      .eq("user_id", user.id);
    console.log("Retrived reaction:", reaction);

    if (error) {
      console.error(error);
    } else if (reaction.length === 0) {
      let { data: row, error } = await supabase
        .from("reactions")
        .insert({ job_id: id, user_id: user.id, type: type }, { upsert: true });
      if (error) {
        console.error(error);
      } else {
        console.log("Insert reaction successfully:", row);
      }
    } else {
      let { data: row, error } = await supabase
        .from("reactions")
        .update({ type: type })
        .eq("id", reaction[0].id)
        .select();
      if (error) {
        console.error(error);
      } else {
        console.log("Update reaction successfully:", row);
      }
    }
  };

  const openLink = (link) => {
    window.open(link, "_blank");
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error fetching reactions: {error}</div>;

  return (
    <div className="listing-container">
      <div className="listing">
        <JobDetails
          roleName={roleName}
          companyName={companyName}
          location={location}
        />
        <div className="application">
          <button onClick={() => openLink(applicationUrl)}>Apply</button>
        </div>
        <div className="tags">
          <span>#{tags[0]}#</span>
        </div>
        <div className="reactions">
          <ReactionButton
            onClick={() => handleReaction("like")}
            emoji="👍"
            count={reactions.likes}
          />
          <ReactionButton
            onClick={() => handleReaction("red_flag")}
            emoji="🚩"
            count={reactions.redFlags}
          />
          <button>✅ {applications}</button>
          <button onClick={() => setShow(!show)}>
            💬 {reactions.comments}
          </button>
        </div>
      </div>
      {show ? (
        <div>
          <div>
            <CommentView jobID={id} />
          </div>
          <div className="comments">
            <CommentBox jobID={id} />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default React.memo(ListingCard);
