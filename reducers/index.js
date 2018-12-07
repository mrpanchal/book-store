import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

const rootReducers = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducers;
