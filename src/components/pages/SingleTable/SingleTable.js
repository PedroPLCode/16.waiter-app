//import styles from './Card.module.scss';
//import { removeCard } from '../../redux/store';
//import { useDispatch } from 'react-redux';

const SingleTable = props => {

  //const dispatch = useDispatch();
  
  const handleClick = (event, tableId) => {
    event.preventDefault();
    console.log(tableId);
    //dispatch({ type: 'REMOVE_CARD', payload: { cardId } });
    //dispatch(removeCard(cardId));
  }

  return (
    <li>
      <p>Id: {props.id}</p>
      <p>Status: {props.status}</p>
      <p>peopleAmount: {props.peopleAmount}</p>
      <p>maxPeopleAmount: {props.maxPeopleAmount}</p>
      <p>bill: {props.bill}</p>
      <button onClick={event => handleClick(event, props.id)}>BUTTON</button>
    </li>
  );
};

export default SingleTable;