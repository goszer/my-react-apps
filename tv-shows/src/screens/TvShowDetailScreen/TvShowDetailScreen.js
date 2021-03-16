import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {Container} from "semantic-ui-react";
import TvShowDetail from './components/TvShowDetail';

const TvShowDetailsScreen = () => {
    const [showDetails, setShowDetails] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);

    let {id} = useParams();

    useEffect(() => {
        const params = new URLSearchParams({
            api_key: process.env.REACT_APP_API_KEY,
            language: 'en_US'
        });
        fetch(`https://api.themoviedb.org/3/tv/${id}?${params}`)
            .then((res) => res.json())
            .then(
                (response) => {
                    setShowDetails(response);
                    setIsLoaded(true);
                },
                (error) => {
                    console.log("Error occured");
                    setError(error);
                    setIsLoaded(true);
                }
            );
    }, [id]);

    return (
        <Container>
            <TvShowDetail showDetails={showDetails} />
        </Container>
    );
}

export default TvShowDetailsScreen;