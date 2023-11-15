import React from "react";

const ListingCard = (prop) => {
  const {
    role: roleName,
    company: companyName,
    url: applicationUrl,
    location,
    tags,
  } = prop.job;

  const likes = 0;
  const redFlags = 0;
  const applications = 0;
  const comments = 0;

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
        <button>👍 {likes}</button>
        <button>🚩 {redFlags}</button>
        <button>✅ {applications}</button>
        <button>💬 {comments}</button>
      </div>
    </div>
  );
};

export default ListingCard;
