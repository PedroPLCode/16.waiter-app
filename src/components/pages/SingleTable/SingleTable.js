//import styles from './Card.module.scss';
//import { removeCard } from '../../redux/store';
//import { useDispatch } from 'react-redux';

const SingleTable = props => {

  //const dispatch = useDispatch();
  
  const handleClick = (cardId) => {
    //dispatch({ type: 'REMOVE_CARD', payload: { cardId } });
    //dispatch(removeCard(cardId));
  }

  return (
    <li>{props.title}<button onClick={handleClick(props.id)}>X</button></li>
  );
};

export default SingleTable;