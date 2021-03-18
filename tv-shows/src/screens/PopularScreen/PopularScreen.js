import {useCallback,useState} from 'react';
import TvShowsList from './components/TvShowsList';
import Screen from '../../components/Screen';
import {Button, Grid, GridColumn, Input} from 'semantic-ui-react';
import useSearchTvshowsApi from "./hooks/useSearchTvShowsApi";
import _ from 'lodash';
import useLocalStorage from "../../hooks/useLocalStorage";

const PopularScreen = () => {
    const [searchFieldValue, setSearchFieldValue] = useState('');
    const [searchText, setSearchText] = useState('');
    const [favorites, setFavorites] = useLocalStorage("favoritesTvShows", []);
    const [page, setPage] = useState(1);
    let {totalList, isLoaded, error, loadMoreBtnVisible} = useSearchTvshowsApi(searchText, page);

    const delayedSet = useCallback(_.debounce((text)=>delayedSetSearchText(text), 500 ), []);

    const handleSearchFieldChange = (e) => {
        const val = e.target.value;
        totalList = [];
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

    return (
        <Screen>
            <Input
                placeholder="Search shows..."
                value={searchFieldValue}
                onChange={handleSearchFieldChange}
            />
            <TvShowsList
                shows={totalList}
                favorites={favorites}
                onFavoritesChange={handleFavoritesChange}
                isLoaded={isLoaded}
                error={error}
            />
            <Grid>
                <GridColumn textAlign="center">
                    <Button disabled={!loadMoreBtnVisible} onClick={handleLoadMore}>Load more</Button>
                </GridColumn>
            </Grid>
        </Screen>
    );
};

export default PopularScreen;
