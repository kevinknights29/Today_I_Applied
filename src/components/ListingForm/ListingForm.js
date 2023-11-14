import React from "react";

const ListingForm = () => {
  return (
    <div className="job-form" id="job-form-div">
      <form action="" method="">
        <label htmlFor="role">Role:</label>
        <input type="text" id="role" name="role" required />
        <span>200</span>
        <label htmlFor="company">Company:</label>
        <input type="text" id="company" name="company" required />
        <span>200</span>
        <label htmlFor="application-url">Application URL:</label>
        <input
          type="url"
          id="application-url"
          name="application-url"
          required
        />
        <span>200</span>
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
