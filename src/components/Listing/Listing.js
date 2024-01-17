import React, {useState} from 'react';
import ListingCard from '../ListingCard/ListingCard';
import {useCategory} from '../../context/CategoryContext';
import useFetchJobs from '../../hooks/useFetchJobs';

const Listing = () => {
  const {selectedCategory} = useCategory();
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10; // Number of items per page
  const {jobs, isLoading, error} = useFetchJobs(
      selectedCategory, currentPage, pageSize,
  );

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

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

      <div className="pagination">
        <button onClick={prevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>Page {currentPage}</span>
        <button onClick={nextPage} disabled={jobs.length < pageSize}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Listing;
