//import styles from './Card.module.scss';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { getTableById, removeTableRequest, editTableRequest } from '../../../redux/tableReducer';
import { Navigate } from 'react-router-dom';

const SingleTableForm = () => {

  const { tableId } = useParams();
  const singleTableData = useSelector(state => getTableById(state, tableId));

  const [id, setId] = useState(singleTableData.id); 
  const [status, setStatus] = useState(singleTableData.status); 
  const [peopleAmount, setPeopleAmount] = useState(singleTableData.peopleAmount); 
  const [maxPeopleAmount, setMaxPeopleAmount] = useState(singleTableData.maxPeopleAmount); 
  const [bill, setBill] = useState(singleTableData.bill); 

  const dispatch = useDispatch();

  const handleEditTable = event => {
    event.preventDefault();
    const editedTable = {
      id: parseInt(tableId),
      status: status,
      peopleAmount: parseInt(peopleAmount),
      maxPeopleAmount: parseInt(maxPeopleAmount),
      bill: parseInt(bill)
    };
    dispatch(editTableRequest(editedTable))
  }

  const handleRemoveTable = event => {
    event.preventDefault();
    dispatch(removeTableRequest(tableId));
  }

  if (maxPeopleAmount > 10) setMaxPeopleAmount(10);
  if (maxPeopleAmount < 0) setMaxPeopleAmount(0);
  if (peopleAmount > maxPeopleAmount) setPeopleAmount(maxPeopleAmount);
  if (peopleAmount < 0) setPeopleAmount(0);
  if (bill < 0) setBill(0);

  if (!singleTableData) return <Navigate to="/" />;
  return (
    <div>
      <h4>Table {id}</h4>
      Status <select name="Status" defaultValue={status}>
        <option value="Free" onClick={event => setStatus(event.target.value)} >Free</option>
        <option value="Busy" onClick={event => setStatus(event.target.value)} >Busy</option>
        <option value="Reserved" onClick={event => setStatus(event.target.value)} >Reserved</option>
        <option value="Cleaning" onClick={event => setStatus(event.target.value)} >Cleaning</option>
      </select>
      People <input value={peopleAmount} placeholder='Table peopleAmount...' onChange={event => setPeopleAmount(event.target.value)}></input> / <input value={maxPeopleAmount} placeholder='Table ImaxPeopleAmount...' onChange={event => setMaxPeopleAmount(event.target.value)}></input>
      Bill $ <input value={bill} placeholder='Table bill...' onChange={event => setBill(event.target.value)}></input>
      <button onClick={event => handleEditTable(event)}>EDIT_TABLE</button>
      <button onClick={event => handleRemoveTable(event)}>REMOVE_TABLE</button>
    </div>
  );
};

export default SingleTableForm;