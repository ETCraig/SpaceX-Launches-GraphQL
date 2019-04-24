import React from 'react';
import './App.css';

import Launches from './components/Launches';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
  uri: 'http://localhost:3030/graphql'
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="container">
        <img
          src='https://i.imgur.com/hzrRwO3.png'
          alt='SpaceX'
          style={{ width: 300, display: 'block', margin: 'auto' }}
        />
        <Launches />
      </div>
    </ApolloProvider>
  );
}

export default App;
