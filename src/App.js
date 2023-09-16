import MainPage from './components/pages/MainPage/MainPage';
import Header from './components/views/Header/Header';
import Footer from './components/views/Footer/Footer';
import { Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchTables } from './redux/tableReducer';

const App = () => {

  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchTables()), [dispatch]);
  //dispatch(fetchTables());

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
