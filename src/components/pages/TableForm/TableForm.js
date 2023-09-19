import { addTableRequest, getAllTables } from "../../../redux/tableReducer";
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { useState } from "react";
import { Button } from "react-bootstrap";

const TableForm = () => {

  const dispatch = useDispatch();
  const tables = useSelector(getAllTables);
  const [newTableId, setNewTableId] = useState(""); 
  let tableUnique = true;

  const handleAddTable = event => {
    event.preventDefault();
    const newTable = {
      id: parseInt(newTableId),
      status: "Free",
      peopleAmount: 0,
      maxPeopleAmount: 4,
      bill: 0
    };
    if (newTable.id >= 10) {
      alert('WE HAVE ONLY 10 TABLES');
      tableUnique = false;
    }
    for (let table of tables) {
      if (table.id === newTable.id) {
          alert('THIS TABLE ID ALREADY EXISTS');
          tableUnique = false;
          break;
      } 
    }
    if (tableUnique) {
      dispatch(addTableRequest(newTable));
    }
  }

  return (
    <div className="col-12 mt-5 mb-5 d-flex flex-row justify-content-center align-items-center gap-2">
      <input className="col-1" value={newTableId} placeholder="New Table..." onChange={event => setNewTableId(event.target.value)}></input>
      <Button className="col-1 " onClick={event => handleAddTable(event)} variant="primary">
        Add Table
      </Button>
    </div>
  );
};

export default TableForm;