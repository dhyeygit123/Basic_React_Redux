import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import ComponentB from './ComponentB';
import ComponentC from './ComponentC';

const ComponentA = () => {
  return (
    <Provider store={store}>
      <div>
        <div>
          <h1>This is ComponentB</h1>
        <ComponentB />
        </div>
        <h1>This is ComponentC</h1>
        <ComponentC />
      </div>
    </Provider>
  );
};

export default ComponentA;