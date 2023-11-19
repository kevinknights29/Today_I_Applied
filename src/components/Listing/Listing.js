import React from "react";
import ListingCard from "../ListingCard/ListingCard";
import { useCategory } from "../../context/CategoryContext";
import useFetchJobs from "../../hooks/useFetchJobs";

const Listing = () => {
  const { selectedCategory } = useCategory();
  const { jobs, isLoading, error } = useFetchJobs(selectedCategory);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

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
