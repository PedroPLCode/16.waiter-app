//import styles from './Card.module.scss';
//import { useDispatch } from 'react-redux';
import { useState } from 'react';
//import { removeTable, updateTables } from '../../../redux/tableReducer';
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector';
import { getTableById, getAllTables } from '../../../redux/tableReducer';
import { Link } from 'react-router-dom';

const SingleTableOverview = props => {

  console.log(props.id)
  const singleTableData = useSelector(state => getTableById(state, props.id));

  const [id, setId] = useState(singleTableData[0].id); 
  const [status, setStatus] = useState(singleTableData[0].status); 
  //const [peopleAmount, setPeopleAmount] = useState(props.peopleAmount); 
  //const [maxPeopleAmount, setMaxPeopleAmount] = useState(props.maxPeopleAmount); 
  //const [bill, setBill] = useState(props.bill); 

  //const dispatch = useDispatch();

  return (
    <li>
      <h4>Table {id} Status {status}</h4>
      
      <Link to={`table/${props.id}`}>See More</Link>

    </li>
  );
};

export default SingleTableOverview;