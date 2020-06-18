import { useState, useEffect } from 'react';

// #TODO = Work on axiosInstance parameter type.
const useAxios = (axiosInstance: any, endpoint: string) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    if (!endpoint || !axiosInstance) {
      return;
    }

    // Fetch Data for given endpoint.
    try {
      (async function fetchData() {
        const response = await axiosInstance.get(endpoint);
        const responseData = response.data;

        setData(responseData);
        setLoading(false);
      })();
    } catch (error) {
      setError(error.toString());
      setLoading(false);
    }
  }, [endpoint, axiosInstance]);

  return [data, loading, error];
};

export default useAxios;
