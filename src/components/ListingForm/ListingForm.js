import { createClient } from "@supabase/supabase-js";
import React, { useState } from "react";

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
  const [tags, setTags] = useState("");

  /**
   * Supabase URL and API key.
   */
  const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
  const supabaseKey = process.env.REACT_APP_SUPABASE_API_KEY;

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
    console.log(
      `Role: ${roleName}, Company: ${companyName}, Application URL: ${applicationUrl}, Location: ${location}, Tags: ${tags}`
    );

    // Create a single supabase client for interacting with your database
    console.log(supabaseUrl, supabaseKey);
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Get Authenticated User ID
    const {
      data: { user },
    } = await supabase.auth.getUser();
    console.log(user.id);

    // Insert a new job
    const { data, error } = await supabase
      .from("jobs")
      .insert([
        {
          user_id: user.id,
          role: roleName,
          company: companyName,
          url: applicationUrl,
          location: location,
          tags: [tags],
        },
      ])
      .select();

    if (error) {
      console.error(error);
    } else {
      console.log("Job inserted successfully:", data);
    }
  };

  return (
    <div className="job-form" id="job-form-div">
      <form onSubmit={handleSubmit}>
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
        <select
          name="location"
          id="location"
          value={location}
          onChange={handleLocationChange}
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
          onChange={handleTagsChange}
          required
        >
          <option value="engineering">Engineering</option>
          <option value="data">Data</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ListingForm;
