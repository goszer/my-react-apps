import { useEffect, useState } from 'react';

const useSearchTvShowsApi = (sText) => {
    const [page, setPage] = useState(1);
    const [totalList, setTotalList] = useState([]);
    const [showList, setShowList] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        setPage(1);
        setShowList([]);
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
            : `https://api.themoviedb.org/3/search/tv?${params}`;

        fetch(req)
            .then((res) => res.json())
            .then(
                (response) => {
                    setHasMore(response.page < response.total_pages)
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
        page,
        setPage,
        totalList,
        isLoaded,
        error,
        hasMore
    };
};

export default useSearchTvShowsApi;
