//import styles from './Card.module.scss';
//import { useDispatch } from 'react-redux';
import { useState } from 'react';
//import { removeTable, updateTables } from '../../../redux/tableReducer';

const SingleTableOverview = props => {

  const [id, setId] = useState(props.id); 
  const [status, setStatus] = useState(props.status); 
  //const [peopleAmount, setPeopleAmount] = useState(props.peopleAmount); 
  //const [maxPeopleAmount, setMaxPeopleAmount] = useState(props.maxPeopleAmount); 
  //const [bill, setBill] = useState(props.bill); 

  //const dispatch = useDispatch();

  const handleSeeMore = (event) => {
    event.preventDefault();
    console.log(event, props.id);
  }

  return (
    <li>
      <h4>Table {id} Status {status}</h4>
      <button onClick={event => handleSeeMore(event, id)}>SEE MORE</button>
    </li>
  );
};

export default SingleTableOverview;