import PropTypes from 'prop-types';
import { Button, Card, Icon, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const TvShowItem = ({
  id,
  name,
  rating,
  posterPath,
  favorite,
  onFavoriteButtonClick,
  releaseDate,
}) => {
  const handleFavoriteButtonClick = (event) => {
    event.preventDefault();
    onFavoriteButtonClick();
  };

  const imagePath = posterPath ? `https://image.tmdb.org/t/p/w500/${posterPath}` : 'https://via.placeholder.com/210x315/FFFAF0/000000?text=n/a';

  return (
    <Card
      as={Link}
      to={`/show/${id}`}
      style={{
        cursor: 'pointer',
      }}
    >
      <Image src={imagePath} alt={name} />
      <Card.Content>
        <Card.Header>
          <p style={{ minHeight: '90px' }}>{name}</p>
        </Card.Header>
        <Card.Meta>{releaseDate}</Card.Meta>
      </Card.Content>
      <Card.Content>
        <Icon name="star" />
        {rating}
      </Card.Content>
      <Card.Content>
        <Button
          fluid
          basic={!favorite}
          positive={favorite}
          onClick={handleFavoriteButtonClick}
        >
          <Icon name="heart" />
          {favorite ? 'Remove from favorites' : 'Add to favorites'}
        </Button>
      </Card.Content>
    </Card>
  );
};

TvShowItem.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  rating: PropTypes.number,
  posterPath: PropTypes.string,
  releaseDate: PropTypes.string,
  favorite: PropTypes.bool,
  onFavoriteButtonClick: PropTypes.func,
};

export default TvShowItem;
