//import styles from './List.module.scss';
import SingleTableOverview from "../SingleTableOverview/SingleTableOverview";
import SingleTableDetails from "../SingleTableDetails/SingleTableDetails";
import { addTable, addTableRequest, getAllTables, fetchTables, updateTables } from "../../../redux/tableReducer";
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { useState } from "react";
import TableForm from "../TableForm/TableForm";
import Loading from "../../common/Loading/Loading";
//import shortid from 'shortid';

const Tables = (props) => {

  const tables = useSelector(getAllTables);
  props.setSpinner(false);

  if (props.spinner) {
    <Loading />
  } else {
    return (
      <div>
        <h4 className="mb-3">All Tables</h4>
        <ul className="col-4 d-flex flex-column align-items-center justify-content-center">
        {tables.map(table =>
                <SingleTableOverview
                key={table.id}
                id={table.id}
                status={table.status} />
                )}
                </ul>
        <TableForm /> 
        </div>
    ); }
  };

export default Tables;