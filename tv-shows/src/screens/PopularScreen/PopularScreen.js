import { useCallback, useState } from 'react';

import { Input, Checkbox, Grid } from 'semantic-ui-react';
import { debounce } from 'lodash';

import TvShowsList from '../components/TvShowsList';
import Screen from '../../components/Screen';
import useSearchTvshowsApi from "./hooks/useSearchTvShowsApi";
import useLocalStorage from "../../hooks/useLocalStorage";
import { useUserStore } from "../../services/UserContext";
import { useHistory } from 'react-router-dom';

const PopularScreen = () => {
    const history = useHistory();
    const [userContext] = useUserStore();
    const [searchFieldValue, setSearchFieldValue] = useState('');
    const [searchText, setSearchText] = useState('');
    const [favorites, setFavorites] = useLocalStorage(`favoritesTvShows_${userContext.loggedInUser.username}`, []);
    const [favsOnly, setFavsOnly] = useState(false);
    let { page, setPage, totalList, isLoaded, error, hasMore } = useSearchTvshowsApi(searchText);

    const delayedSet = useCallback(debounce((text) => delayedSetSearchText(text), 750), []);

    const handleSearchFieldChange = (e) => {
        const val = e.target.value;
        setPage(1);
        setSearchFieldValue(val);
        delayedSet(val);
    };

    const handleLoadMore = (e) => {
        setPage(page + 1);
    }

    const delayedSetSearchText = (text) => {
        setSearchText(text);
    };

    const handleFavoritesChange = (favorites) => {
        setFavorites(favorites);
    };

    const handleFavsOnlyToggle = () => {
        const newValue = !favsOnly;
        setFavsOnly(newValue);
        if (newValue) {
            history.push('/favorites');
        }
    }



    const greeting = `Hi ${userContext.loggedInUser.name}!`;
    return (
        <Screen header={greeting}>
            <Grid columns={2}>
                <Grid.Column>
                    <Input
                        placeholder="Search shows..."
                        value={searchFieldValue}
                        onChange={handleSearchFieldChange}
                    />
                </Grid.Column>
                <Grid.Column>
                    <Checkbox toggle label="Show favorites only" name="favsOnly" checked={favsOnly} onChange={handleFavsOnlyToggle} />
                </Grid.Column>
            </Grid>
            <TvShowsList
                shows={totalList}
                favorites={favorites}
                onFavoritesChange={handleFavoritesChange}
                isLoaded={isLoaded}
                error={error}
                showMore={hasMore}
                handleLoadMore={handleLoadMore}
            />
        </Screen>
    );
};

export default PopularScreen;
