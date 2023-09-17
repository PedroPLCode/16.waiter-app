import MainPage from './components/pages/MainPage/MainPage';
import Header from './components/views/Header/Header';
import Footer from './components/views/Footer/Footer';
import NotFound from './components/pages/NotFound/NotFound';
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchTables } from './redux/tableReducer';
import SingleTableDetails from './components/pages/SingleTableDetails/SingleTableDetails';

const App = () => {

  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchTables()), [dispatch]);

  return (
    <div>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/table/:tableId" element={<SingleTableDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
