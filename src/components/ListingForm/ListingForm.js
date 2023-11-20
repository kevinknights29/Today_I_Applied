import React, {useState} from 'react';
import supabase from '../../client/supabaseClient';
import useFetchUserID from '../../hooks/useFetchUserID';

const ListingForm = () => {
  const [roleName, setRole] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [applicationUrl, setApplicationUrl] = useState('');
  const [location, setLocation] = useState('Panama City, Panama');
  const [tags, setTags] = useState('Engineering');
  const [feedback, setFeedback] = useState('');
  const userID = useFetchUserID();

  const handleEventChange = (event, handler) => {
    handler(event.target.value);
  };

  const isValidUrl = (url) => {
    try {
      new URL(url);
      return true;
    } catch (_) {
      return false;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!userID) {
      setFeedback('User must be logged in to post a job.');
      return;
    }

    if (!isValidUrl(applicationUrl)) {
      setFeedback('Please enter a valid URL.');
      return;
    }

    const {error} = await supabase.from('jobs').insert([
      {
        user_id: userID,
        role: roleName,
        company: companyName,
        url: applicationUrl,
        location: location,
        tags: [tags],
      },
    ]);

    if (error) {
      setFeedback('Error submitting the job: ' + error.message);
    } else {
      setFeedback('Job inserted successfully!');
      setRole('');
      setCompanyName('');
      setApplicationUrl('');
      setLocation('Panama City, Panama');
      setTags('Engineering');
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
          onChange={(event) => handleEventChange(event, setRole)}
          required
        />
        <span>{200 - roleName.length}</span>
        <label htmlFor="company">Company:</label>
        <input
          type="text"
          id="company"
          name="company"
          value={companyName}
          onChange={(event) => handleEventChange(event, setCompanyName)}
          required
        />
        <span>{200 - companyName.length}</span>
        <label htmlFor="application-url">Application URL:</label>
        <input
          type="url"
          id="application-url"
          name="application-url"
          value={applicationUrl}
          onChange={(event) => handleEventChange(event, setApplicationUrl)}
          required
        />
        <span>{200 - applicationUrl.length}</span>
        <label htmlFor="location">Location:</label>
        <select
          name="location"
          id="location"
          value={location}
          onChange={(event) => handleEventChange(event, setLocation)}
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
          onChange={(event) => handleEventChange(event, setTags)}
          required
        >
          <option value="Engineering">Engineering</option>
          <option value="Data">Data</option>
        </select>
        <button type="submit">Submit</button>
      </form>
      {feedback && <div className="feedback-message">{feedback}</div>}
    </div>
  );
};

export default ListingForm;
