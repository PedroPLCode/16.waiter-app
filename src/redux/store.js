import { createStore, applyMiddleware, compose } from 'redux';
import tableReducer from './tableReducer';
import initialState from './initialState';
import thunk from 'redux-thunk';

const store = createStore(
  tableReducer,
  initialState,
  compose(
    applyMiddleware(thunk),
  )
);
  
export default store;