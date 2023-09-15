//selectors

// actions
const createActionName = actionName => `app/tables/${actionName}`;

// action creators
const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    default:
      return statePart;
  };
};
export default tablesReducer;


/*


import shortid from 'shortid';

export const getAllBooks = (state) => state.books;

const createActionName = name => `app/books/${name}`;
const REMOVE_BOOK = createActionName("REMOVE_BOOK");
const ADD_BOOK = createActionName("ADD_BOOK");
const UPDATE_BOOKS = createActionName("UPDATE_BOOKS");

export const addBook = payload => ({ type: ADD_BOOK, payload });
export const removeBook = payload => ({ type: REMOVE_BOOK, payload });
export const updateBooks = payload => ({ type: UPDATE_BOOKS, payload });
export const fetchBooks = () => {
  return (dispatch) => {
    fetch('http://localhost:3131/books')
      .then(response => response.json())
      .then(books => dispatch(updateBooks(books)));
  }
};
export const addBookRequest = newBook => {
  return (dispatch) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newBook),
    };
    fetch(`http://localhost:3131/books`, options)
      .then(() => dispatch(addBook(newBook)))
  }
};
export const removeBookRequest = bookId => {
  return (dispatch) => {
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    };
    fetch(`http://localhost:3131/books/${bookId.toString()}`, options)
      .then(() => dispatch(removeBook(bookId)))
  }
};

const booksReducer = (state, action) => {
  switch (action.type) {
    case ADD_BOOK: 
      return { ...state, books: [...state.books, { ...action.payload, id: shortid() }]};
    case REMOVE_BOOK: 
      return { ...state, books: [...state.books.filter(book => action.payload !== book.id)]};
    case UPDATE_BOOKS:
      return { ...state, books: action.payload};
    default:
      return state;
  }
};

export default booksReducer;

*/