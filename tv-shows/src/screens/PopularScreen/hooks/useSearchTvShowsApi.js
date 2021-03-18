import { useEffect, useState } from 'react';

const useSearchTvShowsApi = (sText, page) => {
    const [totalList, setTotalList] = useState([]);
    const [showList, setShowList] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);
    const [loadMoreBtnVisible, setLoadMoreBtnVisible] = useState(false);

    useEffect(() => {
        setTotalList([]);
    }, [sText]);

    useEffect(() => {
        const params = new URLSearchParams({
            api_key: process.env.REACT_APP_API_KEY,
            language: "en_US",
            page: page,
            include_adult: false,
            query: sText,
        });
        const req = sText === ""
            ? `https://api.themoviedb.org/3/tv/popular?${params}`
            :`https://api.themoviedb.org/3/search/tv?${params}`;

        console.log(req);
        fetch(req)
            .then((res) => res.json())
            .then(
                (response) => {
                    setLoadMoreBtnVisible(response.page < response.total_pages);
                    setShowList(response.results);
                    setIsLoaded(true);
                },
                (error) => {
                    setError(error);
                    setIsLoaded(true);
                }
            );
    }, [sText, page]);

    useEffect(() => {
        setTotalList(totalList.concat(showList));
    }, [showList]);

    return {
        totalList,
        isLoaded,
        error,
        loadMoreBtnVisible
    };
};

export default useSearchTvShowsApi;
