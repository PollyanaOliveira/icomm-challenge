import { createContext } from 'react';

import clothes from '../data';

const INITIAL_STATE = {
  products: [...clothes],
  cart: [],
};

const Context = createContext(INITIAL_STATE);

export default Context;
