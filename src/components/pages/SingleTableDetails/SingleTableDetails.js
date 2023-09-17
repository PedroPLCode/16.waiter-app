//import styles from './Card.module.scss';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { updateTables, getTableById, removeTableRequest } from '../../../redux/tableReducer';
//import { Navigate } from 'react-router-dom';

const SingleTableDetails = () => {

  const { tableId } = useParams();
  const singleTableData = useSelector(state => getTableById(state, parseInt(tableId)));

  console.log(tableId)

  const [id, setId] = useState(singleTableData[0].id); 
  const [status, setStatus] = useState(singleTableData[0].status); 
  const [peopleAmount, setPeopleAmount] = useState(singleTableData[0].peopleAmount); 
  const [maxPeopleAmount, setMaxPeopleAmount] = useState(singleTableData[0].maxPeopleAmount); 
  const [bill, setBill] = useState(singleTableData[0].bill); 

  const dispatch = useDispatch();

  const handleUpdateTable = event => {
    event.preventDefault();
    console.log(event);
    dispatch({ type: 'UPDATE_TABLE', payload: {  } });
    dispatch(updateTables( { id, status, peopleAmount, maxPeopleAmount, bill }));
  }

  const handleRemoveTable = event => {
    event.preventDefault();
    dispatch(removeTableRequest(tableId));
  }

  //if(!singleTableData[0]) return <Navigate to="/" />
  return (
    <div>
      <h4>Table {id}</h4>
      Status <input value={status} placeholder='Table Status' onChange={event => setStatus(event.target.value)}></input>
      People <input value={peopleAmount} placeholder='Table peopleAmount' onChange={event => setPeopleAmount(event.target.value)}></input> / <input value={maxPeopleAmount} placeholder='Table ImaxPeopleAmount' onChange={event => setMaxPeopleAmount(event.target.value)}></input>
      Bill $ <input value={bill} placeholder='Table bill' onChange={event => setBill(event.target.value)}></input>
      <button onClick={event => handleUpdateTable(event, id)}>UPDATE_TABLE</button>
      <button onClick={event => handleRemoveTable(event, id)}>REMOVE_TABLE</button>
    </div>
  );
};

export default SingleTableDetails;