import { useState, useEffect } from "react";
import supabase from "../client/supabaseClient";

const useFetchData = (tableName, selectFields, rangeLimit) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        let { data: fetchedData, error } = await supabase
          .from(tableName)
          .select(selectFields)
          .range(0, rangeLimit);

        if (error) throw error;
        setData(fetchedData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [tableName, selectFields, rangeLimit]);

  return { data, error, loading };
};

export default useFetchData;
