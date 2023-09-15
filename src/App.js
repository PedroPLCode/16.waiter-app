//import Aaa from './components/BooksForm/BooksForm'
//import Bbb from './components/BooksList/BooksList'
//import { fetchBooks } from './redux/booksReducer';
//import { useDispatch } from 'react-redux';
//import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import MainPage from './components/pages/MainPage/MainPage';
import Header from './components/views/Header/Header';
import Footer from './components/views/Footer/Footer';

const App = () => {

  //const dispatch = useDispatch();
  //useEffect(() => dispatch(fetchBooks()), [dispatch]);

  return (
    <div>
      <Header />
      <Container>
        <MainPage />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
