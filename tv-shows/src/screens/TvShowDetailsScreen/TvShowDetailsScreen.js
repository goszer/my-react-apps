import { useParams, Link, useHistory } from 'react-router-dom';
import { Breadcrumb, Dimmer, Divider, Grid, Header, Image, Label, Loader, Message, Segment } from 'semantic-ui-react';
import Screen from '../../components/Screen';
import useTvShowDetailsApi from "./hooks/useTvShowDetailsApi";
import TvShowTrailer from "./components/TvShowTrailer";
import { useUserStore } from "../../services/UserContext";

const TvShowDetailsScreen = () => {
    const history = useHistory();
    const { id } = useParams();

    const [userContext] = useUserStore();
    const { showDetails, isLoaded, error } = useTvShowDetailsApi(id);
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

    const imagePath = poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : 'https://via.placeholder.com/210x315/FFFAF0/000000?text=n/a';
    const greeting = `Hi ${userContext.loggedInUser.name}!`;

    const handleGoBack = () => {
        history.goBack();
    }

    return (
        <Screen header={greeting}>
            <Breadcrumb>
                <Breadcrumb.Section link onClick={handleGoBack}>
                    Home
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
                            src={imagePath}
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
                        <Divider />
                        <TvShowTrailer id={id} />
                    </Grid.Column>
                </Grid>
            </Segment>
        </Screen>
    );
};

export default TvShowDetailsScreen;
