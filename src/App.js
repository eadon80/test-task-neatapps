import React from 'react';
import { Provider } from 'react-redux';
import { Navbar } from 'react-bootstrap';

import store from './store';

import ItemList from './components/ItemList';

function App() {
  return (
    <Provider store={store}>
      <Navbar bg="dark" variant="dark">
          <Navbar.Brand>
              DemoApp
          </Navbar.Brand>
      </Navbar>
      
      <ItemList />
    </Provider>
  );
}

export default App;
