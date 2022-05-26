// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './Redux/App';
// import reportWebVitals from './reportWebVitals';
// import { configureStore } from '@reduxjs/toolkit';
// import { Provider } from 'react-redux';
// import {reducer} from './Redux/rootReducer'

// let store = configureStore({reducer, devTools : window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() })

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//    <Provider store={store}>
//    <App/>
//    </Provider>
//   </React.StrictMode>
// );

import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';
import './index.css';
// import App from './Redux/App';
import App from './App';
import reportWebVitals from './reportWebVitals';

/*
React Bootsrap Configuration
 */

// import "../node_modules/react-bootstrap/dist/react-bootstrap";
// import "../node_modules/bootstrap/dist/css/bootstrap.css";
// import { ApolloProvider, InMemoryCache, ApolloClient } from '@apollo/client';

// const apolloClient = new ApolloClient({
//   uri: "https://above-jaybird-69.hasura.app/v1/graphql",
//   cache: new InMemoryCache(),
//   // link: new HttpLink({
    
//   })



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <ApolloProvider client={client}>
    <React.StrictMode>
   <App/>
  </React.StrictMode>
  // </ApolloProvider>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
