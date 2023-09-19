//import styles from './List.module.scss';
import SingleTableOverview from "../SingleTableOverview/SingleTableOverview";
import SingleTableDetails from "../SingleTableDetails/SingleTableDetails";
import { addTable, addTableRequest, getAllTables, fetchTables, updateTables } from "../../../redux/tableReducer";
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { useState } from "react";
import { Button } from "react-bootstrap";
//import shortid from 'shortid';

const TableForm = () => {

  const tables = useSelector(getAllTables);
  const [newTableId, setNewTableId] = useState(parseInt(tables.length) + 1); 

  const dispatch = useDispatch();

  const handleAddTable = (event) => {
    event.preventDefault();
    const newTable = {
      id: parseInt(newTableId),
      status: "Free",
      peopleAmount: 0,
      maxPeopleAmount: 4,
      bill: 0
    };
    dispatch(addTableRequest(newTable));
  }

    return (
      <div className="col-4 mt-5 mb-5 d-flex flex-row justify-content-end align-items-center gap-2">
        <input className="col-1" value={newTableId} placeholder="New Table Number..." onChange={event => setNewTableId(event.target.value)}></input>
        <Button className="col-3" onClick={event => handleAddTable(event)} variant="primary">
          Add Table
        </Button>
      </div>
    );
  };

export default TableForm;