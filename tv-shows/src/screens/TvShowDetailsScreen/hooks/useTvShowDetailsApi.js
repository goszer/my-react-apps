import { useEffect, useState } from 'react';

const useTvShowDetailsApi = (id) => {
    const [showDetails, setShowDetails] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const params = new URLSearchParams({
            api_key: process.env.REACT_APP_API_KEY,
            language: 'en_US',
            page: 1,
        });
        fetch(`https://api.themoviedb.org/3/tv/${id}?${params}`)
            .then((res) => res.json())
            .then(
                (response) => {
                    setShowDetails(response);
                    setIsLoaded(true);
                },
                (error) => {
                    setError(error);
                    setIsLoaded(true);
                }
            );
    }, [id]);

    return {
        showDetails,
        isLoaded,
        error,
    };
};

export default useTvShowDetailsApi;
