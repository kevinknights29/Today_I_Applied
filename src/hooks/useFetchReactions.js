import {useState, useEffect} from 'react';
import supabase from '../client/supabaseClient';

const useFetchReactions = (jobId) => {
  const [reactions, setReactions] = useState({
    likes: 0,
    redFlags: 0,
    comments: 0,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReactions = async () => {
      setLoading(true);

      try {
        // Fetching the number of likes for the job
        const {count: likesCount, error: likesError} = await supabase
            .from('reactions')
            .select('*', {count: 'exact'})
            .eq('job_id', jobId)
            .eq('type', 'like');

        if (likesError) throw likesError;

        // Fetching the number of red flags for the job
        const {count: redFlagsCount, error: redFlagsError} = await supabase
            .from('reactions')
            .select('*', {count: 'exact'})
            .eq('job_id', jobId)
            .eq('type', 'red_flag');

        if (redFlagsError) throw redFlagsError;

        // Fetching the number of comments for the job
        const {count: commentsCount, error: commentsError} = await supabase
            .from('comments')
            .select('*', {count: 'exact'})
            .eq('job_id', jobId);

        if (commentsError) throw commentsError;

        // Updating the state with fetched data
        setReactions({
          likes: likesCount,
          redFlags: redFlagsCount,
          comments: commentsCount,
        });
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchReactions();

    // Cleanup function
    return () => {
      // Currently, there is no specific cleanup required for this hook.
      // If you subscribe to any streams or events, you should unsubscribe here.
      // Example: supabase.removeSubscription(yourSubscription)
    };
  }, [jobId]);

  return {reactions, loading, error};
};

export default useFetchReactions;
