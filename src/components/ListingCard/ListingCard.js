import React, { useState, useEffect } from "react";
import supabase from "../../client/supabaseClient";

const ListingCard = (prop) => {
  const {
    id,
    role: roleName,
    company: companyName,
    url: applicationUrl,
    location,
    tags,
  } = prop.job;

  const likeValue = "like";
  const redFlagValue = "red_flag";

  const [likes, setLikes] = useState(0);
  const [redFlags, setRedFlags] = useState(0);
  const [applications, setApplications] = useState(0);
  const [comments, setComments] = useState(0);

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
      let { data: r, error } = await supabase
        .from("reactions")
        .insert({ job_id: id, user_id: user.id, type: type }, { upsert: true })
        .select();
      if (error) {
        console.error(error);
      } else {
        console.log("Insert reaction successfully:", r);
      }
    } else {
      let { data: r, error } = await supabase
        .from("reactions")
        .update({ type: type })
        .eq("id", reaction[0].id)
        .select();
      if (error) {
        console.error(error);
      } else {
        console.log(
          `Update reaction_id ${reaction[0].id} with ${type} successfully:, `
        );
        console.log("Update reaction successfully:", r);
      }
    }
  };

  // Fetch reactions from the database when the component mounts
  useEffect(() => {
    const fetchReactions = async () => {
      let { error_likes, count: count_likes } = await supabase
        .from("reactions")
        .select("*", { count: "exact", head: true })
        .eq("job_id", id)
        .eq("type", likeValue);

      if (error_likes) {
        console.error(error_likes);
      } else {
        console.log("Read likes successfully:", count_likes);
        setLikes(count_likes === null ? 0 : count_likes);
      }

      let { error_redFlags, count: count_redFlags } = await supabase
        .from("reactions")
        .select("*", { count: "exact", head: true })
        .eq("job_id", id)
        .eq("type", redFlagValue);

      if (error_redFlags) {
        console.error(error_redFlags);
      } else {
        console.log("Read redFlags successfully:", count_redFlags);
        setRedFlags(count_redFlags === null ? 0 : count_redFlags);
      }
    };
    fetchReactions();
  }, []);

  const openLink = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div className="listing">
      <div className="details">
        <table>
          <tbody>
            <tr>
              <th>👤 Role</th>
              <td>{roleName}</td>
            </tr>
            <tr>
              <th>🏢 Company</th>
              <td>{companyName}</td>
            </tr>
            <tr>
              <th>📍 Location</th>
              <td>{location}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="application">
        <button onClick={() => openLink(applicationUrl)}>Apply</button>
      </div>
      <div className="tags">
        <span>#{tags[0]}#</span>
      </div>
      <div className="reactions">
        <button onClick={() => handleReaction(likeValue)}>👍 {likes}</button>
        <button onClick={() => handleReaction(redFlagValue)}>
          🚩 {redFlags}
        </button>
        <button>✅ {applications}</button>
        <button>💬 {comments}</button>
      </div>
    </div>
  );
};

export default ListingCard;
