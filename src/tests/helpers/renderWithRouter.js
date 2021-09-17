import React from 'react';
import { Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import Provider from '../../store/Provider';

const renderWithRouter = (component) => {
  const history = createMemoryHistory();

  return {
    ...render(
      <Router history={history}>
        <Provider>
          {component}
        </Provider>
      </Router>,
    ),
    history,
  };
};

export default renderWithRouter;
