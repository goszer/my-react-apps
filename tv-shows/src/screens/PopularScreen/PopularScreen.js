import { useState } from 'react';
import TvShowsList from './components/TvShowsList';
import Screen from '../../components/Screen';
import { Input } from 'semantic-ui-react';
import usePopularTvShowsApi from './hooks/usePopularTvShowsApi';

const PopularScreen = () => {
  const [searchFieldValue, setSearchFieldValue] = useState('');
  const [favorites, setFavorites] = useState([85271]);
  const { popularShows, isLoaded, error } = usePopularTvShowsApi();

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
    <Screen>
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
    </Screen>
  );
};

export default PopularScreen;
