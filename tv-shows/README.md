# TV Shows app

## Additional feature ideas 👨‍🎨

[] Implement search bar
[] Add message "No results found" when no results are returned from the api
[] Make favorites persistent (https://github.com/rehooks/local-storage)
[] Add a new button "Load more" and implement pagination
[] Implement endless scrolling
[] Separate app in 2 menus: Popular / Favorites
[] Add a way to view the trailer (not sure if it's possible anymore with the new version of their api)

## Resources

- Create React App: https://create-react-app.dev
- React docs: https://reactjs.org/docs/hello-world.html
- Syntax beautifier: https://prettier.io/
- react-router-dom https://reactrouter.com/web
- react-semantic-ui UI library https://react.semantic-ui.com/
- lodash https://lodash.com/docs/
- api: https://developers.themoviedb.org/3/tv/get-tv-details
- feature inspiration: https://www.themoviedb.org/

## Hooks cheatsheet

Reading: https://reactjs.org/docs/hooks-intro.html

### useState

```
const [value, setValue] = useState(initialValue)
```

### useEffect

```
useEffect(callback) // all state
useEffect(callback, []) // no state
useEffect(callback, [some, state]) // [some, state]

```

### useMyHook

Read first: https://reactjs.org/docs/hooks-custom.html

## Good-to-know JS libraries

- Package Managers: npm / yarn
- Module bundlers: webpack / rollup
- Transpilation: babel
- Task managers: grunt / gulp (nobody uses them anymore :)
- Linters: eslint
- Type checking: prop-types / flow / TypeScript
- UI frameworks: material-ui / bootstrap / semantic-ui
- Utils: lodash / ramda
- Style utils: class-names
- Api: fetch / axios

## Book Recommendations

- Practical Modern JS https://github.com/mjavascript/practical-modern-javascript
- You Don't Know JS https://github.com/getify/You-Dont-Know-JS
- Funcional Programming in JavaScript https://www.manning.com/books/functional-programming-in-javascript

## API

At first we have to create an account in [https://www.themoviedb.org/](https://www.themoviedb.org/).

Then we have to obtain an API key from the settings page: [https://www.themoviedb.org/settings/api](https://www.themoviedb.org/settings/api). We will use the v3 auth.

The api must be present in every api call:

```
https://api.themoviedb.org/3/movie/550?api_key={api_key}
```

We need to store this api key in our project. Create React App provides already a way for us to define [custom environment variables](https://create-react-app.dev/docs/adding-custom-environment-variables/). This functionality is provided by a package called `react-scripts`.

In the root folder of our application we can add a dot file named `.env.local` for our local development environment with the following contents:

```jsx
REACT_APP_API_KEY = your_api_key;
```

Apart from that we can have multiple other keys according to the environment:

```jsx
.env.local
.env.development.local
.env.test.local
.env.production.local
```

The variable becomes available to our project:

```jsx
process.env.REACT_APP_API_KEY;
```

Please remember to restart your development server, auto reload will not catch this change.
