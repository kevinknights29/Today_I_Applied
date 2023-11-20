import {useState, useEffect} from 'react';
import {getCurrentUserId} from '../client/supabaseAuth';

const useFetchUserID = () => {
  const [userID, setUserID] = useState(null);

  useEffect(() => {
    const fetchUserID = async () => {
      const id = await getCurrentUserId();
      setUserID(id);
    };

    fetchUserID();
  }, []);

  return userID;
};

export default useFetchUserID;
