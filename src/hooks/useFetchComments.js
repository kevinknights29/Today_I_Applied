import {useState, useEffect} from 'react';
import supabase from '../client/supabaseClient';

const useFetchComments = (jobID) => {
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchComments = async () => {
      setLoading(true);

      try {
        const {data: fetchedComments, error} = await supabase
            .from('comments')
            .select('id, content, created_at')
            .eq('job_id', jobID);

        if (error) throw error;
        setComments(fetchedComments);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchComments();
  }, [jobID]);

  return {comments, loading, error};
};

export default useFetchComments;
