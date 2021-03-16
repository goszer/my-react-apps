import { useEffect, useState } from 'react';

const usePopularTvShowsApi = () => {
  const [popularShows, setPopularShows] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams({
      api_key: process.env.REACT_APP_API_KEY,
      language: 'en_US',
      page: 1,
    });
    fetch(`https://api.themoviedb.org/3/tv/popular?${params}`)
      .then((res) => res.json())
      .then(
        (response) => {
          setPopularShows(response);
          setIsLoaded(true);
        },
        (error) => {
          setError(error);
          setIsLoaded(true);
        }
      );
  }, []);

  return {
    popularShows,
    isLoaded,
    error,
  };
};

export default usePopularTvShowsApi;
