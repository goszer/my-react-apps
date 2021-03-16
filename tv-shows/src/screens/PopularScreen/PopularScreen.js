import { useState, useEffect } from 'react';
import TvShowsList from './components/TvShowsList';
import { Container, Divider, Header, Input } from 'semantic-ui-react';

const PopularScreen = () => {
    const [searchFieldValue, setSearchFieldValue] = useState('');
    const [favorites, setFavorites] = useState([85271]);
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

  const handleSearchFieldChange = (e) => {
    setSearchFieldValue(e.target.value);
  };

  const handleFavoritesChange = (favorites) => {
    setFavorites(favorites);
  };

  const filterShows = () => {
    if (!isLoaded || error) {
      return [];
    }

    return popularShows.results.filter((show) =>
      show.name.toLowerCase().includes(searchFieldValue.toLowerCase())
    );
  };

  return (
    <Container>
      <Header as="h1">Tv Shows</Header>
      <Divider />
      <Input
        placeholder="Search shows..."
        value={searchFieldValue}
        onChange={handleSearchFieldChange}
      />
      <TvShowsList
        shows={filterShows()}
        favorites={favorites}
        onFavoritesChange={handleFavoritesChange}
        isLoaded={isLoaded}
        error={error}
      />
    </Container>
  );
};

export default PopularScreen;
