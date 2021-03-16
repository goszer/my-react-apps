import PropTypes from 'prop-types';
import { Button, Card, Icon, Image } from 'semantic-ui-react';
import {Link} from 'react-router-dom';

const TvShowItem = ({
  key,
  id,
  name,
  rating,
  posterPath,
  favorite,
  onFavClick,
  releaseDate,
}) => {
  const handleFavoriteButtonClick = (event) => {
    event.preventDefault();
    onFavClick();
  }

  return (
    <Card
      as={Link}
      to={`/tvshowdetail/${id}`}
      style={{
        cursor: 'pointer',
      }}
    >
      <Image src={`https://image.tmdb.org/t/p/w500/${posterPath}`} alt={name} />
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>{releaseDate}</Card.Meta>
      </Card.Content>
      <Card.Content>
        <Icon name="star" />
        {rating}
      </Card.Content>
      <Card.Content >
        <Button fluid basic={!favorite} positive={favorite} onClick={handleFavoriteButtonClick}>
          <Icon name="heart" />
          {favorite ? 'Remove from favorites' : 'Add to favorites'}
        </Button>
      </Card.Content>
    </Card>
  );
};

TvShowItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  rating: PropTypes.number,
  posterPath: PropTypes.string,
  releaseDate: PropTypes.string,
  favorite: PropTypes.bool,
  onClick: PropTypes.func,
};

export default TvShowItem;
