//import Aaa from './components/BooksForm/BooksForm'
//import Bbb from './components/BooksList/BooksList'
//import { fetchBooks } from './redux/booksReducer';
//import { useDispatch } from 'react-redux';
//import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import MainPage from './components/pages/MainPage';

const App = () => {

  //const dispatch = useDispatch();
  //useEffect(() => dispatch(fetchBooks()), [dispatch]);

  return (
    <div>
      <header>
        <h2>Waiter App</h2>
      </header>
      <Container>
        <MainPage />
      </Container>
    </div>
  );
}

export default App;
