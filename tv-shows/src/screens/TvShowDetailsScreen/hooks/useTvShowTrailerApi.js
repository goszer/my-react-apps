import { useEffect, useState } from 'react';

const useTvShowTrailerApi = (tvId) => {
    const [trailers, setTrailers] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
        const params = new URLSearchParams({
            api_key: process.env.REACT_APP_API_KEY,
            language: 'en_US',
        });
        const req = `https://api.themoviedb.org/3/tv/${tvId.id}}/videos?${params}`;
        fetch(req)
            .then((res) => res.json())
            .then(
                (response) => {
                    setTrailers(response.results);
                    setIsLoaded(true);
                },
                (error) => {
                    setError(error);
                    setIsLoaded(true);
                }
            );
    }, [tvId]);

    return {
        trailers,
        isLoaded,
        error,
    };
};

export default useTvShowTrailerApi;
