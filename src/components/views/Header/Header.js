//import styles from './Card.module.scss';
//import { removeCard } from '../../redux/store';
//import { useDispatch } from 'react-redux';

const Header = props => {

    //const dispatch = useDispatch();
    
    const handleClick = (cardId) => {
      //dispatch({ type: 'REMOVE_CARD', payload: { cardId } });
      //dispatch(removeCard(cardId));
    }
  
    return (
        <header>Header</header>    );
  };
  
  export default Header;