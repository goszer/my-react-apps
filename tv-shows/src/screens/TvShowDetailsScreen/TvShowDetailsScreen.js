import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Breadcrumb,
  Dimmer,
  Divider,
  Grid,
  Header,
  Image,
  Label,
  Loader,
  Message,
  Segment,
} from 'semantic-ui-react';
import Screen from '../../components/Screen';

const TvShowDetailsScreen = () => {
  const { id } = useParams();

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

  const { name, overview, backdrop_path, poster_path, genres } = showDetails;

  if (!isLoaded) {
    return (
      <Dimmer active inverted>
        <Loader>Loading</Loader>
      </Dimmer>
    );
  }

  if (isLoaded && error) {
    return (
      <Message negative>
        <Message.Header>
          We're sorry, we can't display the popular tv shows at the moment.
        </Message.Header>
        <p>Please contact support NOW!!!</p>
      </Message>
    );
  }
  return (
    <Screen>
      <Breadcrumb>
        <Breadcrumb.Section link>
          <Link to="/">Home</Link>
        </Breadcrumb.Section>
        <Breadcrumb.Divider />
        <Breadcrumb.Section link>{name}</Breadcrumb.Section>
      </Breadcrumb>
      <Segment
        inverted
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500/${backdrop_path})`,
          backgroundSize: 'cover',
        }}
      >
        <Grid
          columns={2}
          style={{ backdropFilter: 'blur(5px) brightness(50%)' }}
        >
          <Grid.Column width={5}>
            <Image
              src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
              alt={name}
            />
          </Grid.Column>
          <Grid.Column width={11}>
            <Header as="h2" size="huge" inverted>
              {name}
            </Header>
            {genres.map(({ id, name }) => (
              <Label key={id}>{name}</Label>
            ))}
            <Divider />
            {overview}
          </Grid.Column>
        </Grid>
      </Segment>
    </Screen>
  );
};

export default TvShowDetailsScreen;
