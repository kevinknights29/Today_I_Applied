import { createClient } from "@supabase/supabase-js";
import React from "react";
import ListingCard from "../ListingCard/ListingCard";
import { useState, useEffect } from "react";

// Create a single supabase client for interacting with your database
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_API_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const Listing = () => {
  // Define state for the jobs
  const [jobs, setJobs] = useState([]);

  // Fetch the jobs from the database when the component mounts
  useEffect(() => {
    const fetchJobs = async () => {
      let { data: jobs, error } = await supabase
        .from("jobs")
        .select("id, role, company, url, location, tags")
        .range(0, 9);

      if (error) {
        console.error(error);
      } else {
        console.log("Read jobs successfully:", jobs);
        setJobs(jobs);
      }
    };
    fetchJobs();
  }, []);

  return (
    <div>
      <ul>
        {jobs.map((job) => (
          <li key={job.id}>
            <ListingCard job={job} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Listing;
