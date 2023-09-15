//import styles from './Card.module.scss';
//import { removeCard } from '../../redux/store';
//import { useDispatch } from 'react-redux';

const Footer = props => {

    //const dispatch = useDispatch();
    
    const handleClick = (cardId) => {
      //dispatch({ type: 'REMOVE_CARD', payload: { cardId } });
      //dispatch(removeCard(cardId));
    }
  
    return (
      <footer>Footer</footer>
    );
  };
  
  export default Footer;