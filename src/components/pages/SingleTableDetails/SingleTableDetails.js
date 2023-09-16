//import styles from './Card.module.scss';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { removeTable, updateTables } from '../../../redux/tableReducer';

const SingleTableDetails = props => {

  const [id, setId] = useState(props.id); 
  const [status, setStatus] = useState(props.status); 
  const [peopleAmount, setPeopleAmount] = useState(props.peopleAmount); 
  const [maxPeopleAmount, setMaxPeopleAmount] = useState(props.maxPeopleAmount); 
  const [bill, setBill] = useState(props.bill); 

  const dispatch = useDispatch();

  const handleUpdateTable = (event) => {
    event.preventDefault();
    console.log(event);
    dispatch({ type: 'UPDATE_TABLE', payload: {  } });
    dispatch(updateTables( { id, status, peopleAmount, maxPeopleAmount, bill }));
  }

  const handleRemoveTable = (event, tableId) => {
    event.preventDefault();
    console.log(tableId);
    dispatch({ type: 'REMOVE_TABLE', payload: { tableId } });
    dispatch(removeTable(tableId));
  }

  return (
    <li>
      <h4>Table {props.id}</h4>
      Status <input value={status} placeholder='Table Status' onChange={event => setStatus(event.target.value)}></input>
      People <input value={peopleAmount} placeholder='Table peopleAmount' onChange={event => setPeopleAmount(event.target.value)}></input> / <input value={maxPeopleAmount} placeholder='Table ImaxPeopleAmount' onChange={event => setMaxPeopleAmount(event.target.value)}></input>
      Bill $ <input value={bill} placeholder='Table bill' onChange={event => setBill(event.target.value)}></input>
      <button onClick={event => handleUpdateTable(event, props.id)}>UPDATE_TABLE</button>
      <button onClick={event => handleRemoveTable(event, props.id)}>REMOVE_TABLE</button>
    </li>
  );
};

export default SingleTableDetails;