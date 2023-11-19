import { useState, useEffect } from "react";
import supabase from "../client/supabaseClient";

const useFetchJobs = (selectedCategory) => {
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchJobs = async () => {
      setIsLoading(true);
      setError(null);

      try {
        let query = supabase
          .from("jobs")
          .select("id, role, company, url, location, tags");

        if (selectedCategory !== "All") {
          query = query.containedBy("tags", [selectedCategory]);
        }

        const { data: jobs, error } = await query.range(0, 9);

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
  }, [selectedCategory]);

  return { jobs, isLoading, error };
};

export default useFetchJobs;
