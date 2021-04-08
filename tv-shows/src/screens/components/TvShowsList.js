import PropTypes from 'prop-types';
import { Card, Dimmer, Loader, Segment } from 'semantic-ui-react';
import TvShowItem from './TvShowItem';
import { xor } from 'lodash';
import ErrorMessage from "../../components/ErrorMessage";
import InfiniteScroll from 'react-infinite-scroll-component';

const TvShowsList = ({
  isLoaded,
  showMore,
  shows,
  error,
  favorites,
  onFavoritesChange,
  handleLoadMore
}) => {
  const handleFavoriteButtonClick = (id) => {
    const newFavorites = xor(favorites, [id]);
    onFavoritesChange(newFavorites);
  };

  if (!isLoaded) {
    return (
      <Dimmer active inverted>
        <Loader>Loading</Loader>
      </Dimmer>
    );
  }

  if (isLoaded && error) {
    return (
      <ErrorMessage />
    );
  }

    if (isLoaded && shows.length <= 0) {
    return (
      <ErrorMessage msg="No result" />
    );
  }

  return (
    <InfiniteScroll
      dataLength={shows.length}
      next={handleLoadMore}
      hasMore={showMore}
    >
      <Segment>
        <Card.Group doubling itemsPerRow={4}>
          {shows.map(
            ({ id, poster_path, backdrop_path, name, vote_average, first_air_date }) => {
              const isFav = favorites.some((favorite) => id === favorite);
              return (
                <TvShowItem
                  key={id}
                  id={id}
                  name={name}
                  posterPath={poster_path}
                  rating={vote_average}
                  releaseDate={first_air_date}
                  onFavoriteButtonClick={() => handleFavoriteButtonClick(id)}
                  favorite={isFav}
                />
              )

            })
          }
        </Card.Group>
      </Segment>
    </InfiniteScroll>
  );
};

TvShowsList.propTypes = {
  isLoaded: PropTypes.bool,
  error: PropTypes.object,
  shows: PropTypes.array,
  favorites: PropTypes.array,
  onFavoritesChange: PropTypes.func,
};

export default TvShowsList;
