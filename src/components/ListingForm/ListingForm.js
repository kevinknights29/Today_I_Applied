import React, { useState } from "react";
import supabase from "../../client/supabaseClient";
import { getCurrentUserId } from "../../client/supabaseAuth";

/**
 * A form component for submitting job listings.
 *
 * @returns {JSX.Element} The ListingForm component.
 */
const ListingForm = () => {
  /**
   * State variables for the form inputs.
   */
  const [roleName, setRole] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [applicationUrl, setApplicationUrl] = useState("");
  const [location, setLocation] = useState("Panama City, Panama"); // Default value
  const [tags, setTags] = useState("Engineering");

  /**
   * Updates the roleName state variable.
   *
   * @param {Object} event - The input change event.
   */
  const handleRoleNameChange = (event) => {
    setRole(event.target.value);
  };

  /**
   * Updates the companyName state variable.
   *
   * @param {Object} event - The input change event.
   */
  const handleCompanyNameChange = (event) => {
    setCompanyName(event.target.value);
  };

  /**
   * Updates the applicationUrl state variable.
   *
   * @param {Object} event - The input change event.
   */
  const handleApplicationUrlChange = (event) => {
    setApplicationUrl(event.target.value);
  };

  /**
   * Updates the location state variable.
   *
   * @param {Object} event - The input change event.
   */
  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  /**
   * Updates the tags state variable.
   *
   * @param {Object} event - The input change event.
   */
  const handleTagsChange = (event) => {
    setTags(event.target.value);
  };

  /**
   * Submits the form data to jobs table in the Supabase database.
   *
   * @param {Object} event - The form submit event.
   */
  const handleSubmit = async (event) => {
    // Prevent the default form behavior
    event.preventDefault();

    const userID = await getCurrentUserId();

    // Insert a new job
    const { error } = await supabase
      .from("jobs")
      .insert([
        {
          user_id: userID,
          role: roleName,
          company: companyName,
          url: applicationUrl,
          location: location,
          tags: [tags],
        },
      ])
      .select();

    if (error) {
      console.error(error.message);
    } else {
      console.log("Job inserted successfully!");
    }
  };

  return (
    <div className="job-form" id="job-form-div">
      <form onSubmit={(event) => handleSubmit(event)}>
        <label htmlFor="role">Role:</label>
        <input
          type="text"
          id="role"
          name="role"
          value={roleName}
          onChange={(event) => handleRoleNameChange(event)}
          required
        />
        <span>{200 - roleName.length}</span>
        <label htmlFor="company">Company:</label>
        <input
          type="text"
          id="company"
          name="company"
          value={companyName}
          onChange={(event) => handleCompanyNameChange(event)}
          required
        />
        <span>{200 - companyName.length}</span>
        <label htmlFor="application-url">Application URL:</label>
        <input
          type="url"
          id="application-url"
          name="application-url"
          value={applicationUrl}
          onChange={(event) => handleApplicationUrlChange(event)}
          required
        />
        <span>{200 - applicationUrl.length}</span>
        <label htmlFor="location">Location:</label>
        <select
          name="location"
          id="location"
          value={location}
          onChange={(event) => handleLocationChange(event)}
          required
        >
          <option value="Panama City, Panama">Panama City, Panama</option>
          <option value="Chorrera, Panama">Chorrera, Panama</option>
          <option value="Colon City, Colon">Colon City, Colon</option>
        </select>
        <label htmlFor="tags">Tags:</label>
        <select
          name="tags"
          id="tags"
          value={tags}
          onChange={(event) => handleTagsChange(event)}
          required
        >
          <option value="Engineering">Engineering</option>
          <option value="Data">Data</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ListingForm;
