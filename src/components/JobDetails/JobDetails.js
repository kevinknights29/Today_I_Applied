import React from "react";

const JobDetails = ({ roleName, companyName, location }) => (
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
);

export default JobDetails;
