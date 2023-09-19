//import styles from './Card.module.scss';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { getTableById, removeTableRequest, editTableRequest } from '../../../redux/tableReducer';
import { Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Button, Col, Row } from 'react-bootstrap';

const SingleTableForm = params => {

  const id = params.singleTableData.id; 
  const [status, setStatus] = useState(params.singleTableData.status); 
  const [peopleAmount, setPeopleAmount] = useState(params.singleTableData.peopleAmount); 
  const [maxPeopleAmount, setMaxPeopleAmount] = useState(params.singleTableData.maxPeopleAmount); 
  const [bill, setBill] = useState(params.singleTableData.bill); 

  const dispatch = useDispatch();

  const handleEditTable = event => {
    event.preventDefault();
    
    if (status !== "Busy") {
      setBill(0);
      setPeopleAmount(0);
      setMaxPeopleAmount(0);
    } ; 

    const editedTable = {
      id: parseInt(id),
      status: status,
      peopleAmount: parseInt(peopleAmount),
      maxPeopleAmount: parseInt(maxPeopleAmount),
      bill: parseInt(bill)
    };
    dispatch(editTableRequest(editedTable))
  }

  const handleRemoveTable = event => {
    event.preventDefault();
    dispatch(removeTableRequest(id));
  }

  if (maxPeopleAmount > 10) setMaxPeopleAmount(10);
  if (maxPeopleAmount < 0) setMaxPeopleAmount(0);
  if (peopleAmount > maxPeopleAmount) setPeopleAmount(maxPeopleAmount);
  if (peopleAmount < 0) setPeopleAmount(0);
  if (bill < 0) setBill(0);

  return (
    <div>
      <Col className='col-4 d-flex flex-column align-items-start gap-2'>
        <Row className='col-5 gap-2'>
          Status <select className='col-8' name="Status" defaultValue={status}>
            <option value="Free" onClick={event => setStatus(event.target.value)} >Free</option>
            <option value="Busy" onClick={event => setStatus(event.target.value)} >Busy</option>
            <option value="Reserved" onClick={event => setStatus(event.target.value)} >Reserved</option>
            <option value="Cleaning" onClick={event => setStatus(event.target.value)} >Cleaning</option>
          </select>
        </Row>

        <Row className='col-5 gap-2'>
        People <input className='col-3' value={peopleAmount} placeholder='Table peopleAmount...' onChange={event => setPeopleAmount(event.target.value)}></input> / <input className='col-3' value={maxPeopleAmount} placeholder='Table ImaxPeopleAmount...' onChange={event => setMaxPeopleAmount(event.target.value)}></input>

        </Row>
        <Row className='col-5 gap-2'>
        Bill $ <input className='col-3' value={bill} placeholder='Table bill...' onChange={event => setBill(event.target.value)}></input>

        </Row>
        <Row>
        <Button className='col-12 mt-4' onClick={event => handleEditTable(event)} variant="primary">EDIT_TABLE</Button>

        </Row>
        <Row>
        <Button className='col-12 mt-4' onClick={event => handleRemoveTable(event)} variant="danger">REMOVE_TABLE</Button>

        </Row>

      </Col>
    </div>
  );
};

export default SingleTableForm;