import React from 'react';
import PropTypes from 'prop-types';

const JobDetails = ({roleName, companyName, location}) => (
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

JobDetails.propTypes = {
  roleName: PropTypes.string.isRequired,
  companyName: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default JobDetails;
