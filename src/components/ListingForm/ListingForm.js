import React, { useState } from "react";

const ListingForm = () => {
  const [roleName, setRole] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [applicationUrl, setApplicationUrl] = useState("");

  const handleRoleNameChange = (event) => {
    setRole(event.target.value);
  };
  const handleCompanyNameChange = (event) => {
    setCompanyName(event.target.value);
  };
  const handleApplicationUrlChange = (event) => {
    setApplicationUrl(event.target.value);
  };

  return (
    <div className="job-form" id="job-form-div">
      <form action="" method="">
        <label htmlFor="role">Role:</label>
        <input
          type="text"
          id="role"
          name="role"
          value={roleName}
          onChange={handleRoleNameChange}
          required
        />
        <span>{200 - roleName.length}</span>
        <label htmlFor="company">Company:</label>
        <input
          type="text"
          id="company"
          name="company"
          value={companyName}
          onChange={handleCompanyNameChange}
          required
        />
        <span>{200 - companyName.length}</span>
        <label htmlFor="application-url">Application URL:</label>
        <input
          type="url"
          id="application-url"
          name="application-url"
          value={applicationUrl}
          onChange={handleApplicationUrlChange}
          required
        />
        <span>{200 - applicationUrl.length}</span>
        <label htmlFor="location">Location:</label>
        <select name="" id="" required>
          <option value="">Panama City, Panama</option>
          <option value="">Chorrera, Panama</option>
          <option value="">Colon City, Colon</option>
        </select>
        <label htmlFor="tags">Tags:</label>
        <select name="" id="" required>
          <option value="engineering">Engineering</option>
          <option value="data">Data</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ListingForm;
