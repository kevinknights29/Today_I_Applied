import {useState, useEffect} from 'react';
import supabase from '../client/supabaseClient';

const useFetchJobs = (selectedCategory, page, pageSize) => {
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchJobs = async () => {
      setIsLoading(true);
      setError(null);

      try {
        let query = supabase
            .from('jobs')
            .select('id, role, company, url, location, tags');

        if (selectedCategory !== 'All') {
          query = query.containedBy('tags', [selectedCategory]);
        }

        // Calculate the offset based on the page and pageSize
        const offset = (page - 1) * pageSize;

        const {data: jobs, error} = await query.range(
            offset, offset + pageSize - 1,
        );

        if (error) {
          throw error;
        }

        setJobs(jobs);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchJobs();
  }, [selectedCategory, page, pageSize]);

  return {jobs, isLoading, error};
};

export default useFetchJobs;
