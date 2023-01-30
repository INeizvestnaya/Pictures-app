import { useEffect, useState } from 'react';

interface UseFetchType<DataType> {
  loading: boolean;
  error: string | null;
  data: DataType | null;
}

function useFetchData<DataType>(url: string): UseFetchType<DataType> {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<DataType | null>(null);

  useEffect(() => {
    const fetchPictures = async () => {
      setLoading(true);

      const response = await fetch(url);

      if (!response.ok) {
        setError('Something wrong with the request...');
        return;
      }

      const fetchedData = await response.json();

      setData(fetchedData);
      setLoading(false);
    };

    fetchPictures();
  }, []);

  return { loading, error, data } as const;
}

export default useFetchData;
