import { useEffect, useState } from 'react';

const useFavoriteTvShowsApi = (favorites, sText) => {
    const [showList, setShowList] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);

    const params = new URLSearchParams({
        api_key: process.env.REACT_APP_API_KEY,
        language: "en_US",
        page: 1,
    });

    const promises = favorites.map(id => fetch(`https://api.themoviedb.org/3/tv/${id}?${params}`));

    useEffect(() => {
        Promise.all(promises)
            .then(res => {
                const responses = res.map((response) => { return response.json() })
                return Promise.all(responses)
            })
            .then(responses => {
                if (sText) {
                    responses = responses.filter((item) => item.name.toUpperCase().includes(sText.toUpperCase()))
                }
                setShowList(responses);
                setIsLoaded(true);
            })
            .catch(error => {
                setError(error);
                setIsLoaded(true);
            });
    }, [favorites, sText]);

    return {
        showList,
        isLoaded,
        error
    };

};

export default useFavoriteTvShowsApi;
