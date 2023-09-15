//import styles from './Card.module.scss';
//import { removeCard } from '../../redux/store';
//import { useDispatch } from 'react-redux';

const NotFound = props => {

    //const dispatch = useDispatch();
    
    const handleClick = (cardId) => {
      //dispatch({ type: 'REMOVE_CARD', payload: { cardId } });
      //dispatch(removeCard(cardId));
    }
  
    return (
      <div>Not Found</div>
    );
  };
  
  export default NotFound;