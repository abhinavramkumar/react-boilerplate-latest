# React Boilerplate

Pre configured boilerplate for react projects packages with webpack 4.

Uses Redux as the state management library & Sagas to dispatch actions asynchronously.

Firebase is set as the default database asit works well with firebase authentication.

I've setup an express server to server the application on port 9000.

### Included Packages

- [react](https://reactjs.org/)
- [react-dom](https://reactjs.org/)
- [react-router-dom](https://github.com/ReactTraining/react-router#readme)

#### State Management

- [redux](http://redux.js.org/)
- [react-redux](https://github.com/gaearon/react-redux)
- [redux-saga](https://redux-saga.js.org/)

#### Database

- [firebase](https://firebase.google.com/)

#### Server

- [express](http://expressjs.com/)

#### CSS

- [styled-components](https://styled-components.com/)

#### For Testing

- [jest](https://jestjs.io/)
- [enzyme](http://airbnb.io/enzyme/)

#### Other userful libs

- [nodemon](http://nodemon.io/)
- [moment](http://momentjs.com/)
- [prop-types](https://facebook.github.io/react/)
- [chalk](https://www.npmjs.com/package/chalk)

### Get Started

1.  Clone Repo to the desired folder.

1.  **Install** dependencies with yarn or npm

    ```js
      yarn install
      npm install
    ```

1.  Then **upgrade** dependencies (optional):

    ```js
      yarn upgrade
      npm upgrade
    ```

1.  Run Node server (default port - 9000) for api calls / server side rendering etc.

    ```js
      yarn server
      npm run server
    ```

1)  Then:

    ```js
      yarn start
      npm run start
    ```

    to start webpack-dev-server at port 3000

1)  Run production build - Output files are created in the 'dist' folder

    ```js
      yarn build
      npm run build
    ```
