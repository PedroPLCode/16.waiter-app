//import styles from './Card.module.scss';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { getTableById, removeTableRequest, editTableRequest } from '../../../redux/tableReducer';
import { Navigate } from 'react-router-dom';
import SingleTableForm from '../SingleTableForm/SingleTableForm';

const SingleTableDetails = () => {

  const { tableId } = useParams();
  const singleTableData = useSelector(state => getTableById(state, parseInt(tableId)));
  console.log(singleTableData)

  if (!singleTableData) {
    return <Navigate to="/" />; 
  } else {
    return (
      <div>
        <h4>Table {tableId}</h4>
        <SingleTableForm singleTableData={singleTableData} />
      </div>
          );
  }
};

export default SingleTableDetails;