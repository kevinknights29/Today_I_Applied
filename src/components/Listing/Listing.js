import React from "react";
import ListingCard from "../ListingCard/ListingCard";
import { useState, useEffect } from "react";
import supabase from "../../client/supabaseClient";
import { useCategory } from "../../context/CategoryContext";

const Listing = () => {
  const { selectedCategory } = useCategory();

  // Define state for the jobs
  const [jobs, setJobs] = useState([]);

  // Fetch the jobs from the database when the component mounts
  useEffect(() => {
    const fetchJobs = async () => {
      if (selectedCategory === "All") {
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
      } else {
        let { data: jobs, error } = await supabase
          .from("jobs")
          .select("id, role, company, url, location, tags")
          .containedBy("tags", [selectedCategory])
          .range(0, 9);

        if (error) {
          console.error(error);
        } else {
          console.log("Read jobs successfully:", jobs);
          setJobs(jobs);
        }
      }
    };
    fetchJobs();
  }, [selectedCategory]);

  return (
    <div className="list">
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
