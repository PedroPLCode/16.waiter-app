//import styles from './List.module.scss';
import SingleTableOverview from "../SingleTableOverview/SingleTableOverview";
import SingleTableDetails from "../SingleTableDetails/SingleTableDetails";
import { addTable, addTableRequest, getAllTables, fetchTables, updateTables } from "../../../redux/tableReducer";
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { useState } from "react";
//import shortid from 'shortid';

const Tables = () => {

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
      <div>
        {tables.map(table =>
                <SingleTableOverview
                key={table.id}
                id={table.id}
                status={table.status} />
                )}
        <input value={newTableId} placeholder="New Table ID..." onChange={event => setNewTableId(event.target.value)}></input>
        <button onClick={event => handleAddTable(event)}>ADD TABLE</button>
      </div>
    );
  };

export default Tables;