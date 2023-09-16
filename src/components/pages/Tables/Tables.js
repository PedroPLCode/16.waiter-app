//import styles from './List.module.scss';
import SingleTableOverview from "../SingleTableOverview/SingleTableOverview";
import SingleTableDetails from "../SingleTableDetails/SingleTableDetails";
import { addTable, addTableRequest, getAllTables, fetchTables, updateTables } from "../../../redux/tableReducer";
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
//import shortid from 'shortid';

const Tables = () => {

  const dispatch = useDispatch();
  const tables = useSelector(getAllTables);
  console.log(tables);

  const handleAddTable = (event) => {
    event.preventDefault();
    const newTable = {
      id: (tables.length + 1).toString(),
      status: "Free",
      peopleAmount: "0",
      maxPeopleAmount: "4",
      bill: "0"
    };
    //dispatch({ type: 'ADD_TABLE', payload: { newTable } });
    dispatch(addTableRequest(newTable));
    //dispatch(addTable(newTable));
  }

    return (
      <div>
        {tables.map(table =>
                <SingleTableOverview
                key={table.id}
                id={table.id}
                status={table.status} />
                )}
        <button onClick={event => handleAddTable(event)}>ADD TABLE</button>
      </div>
    );
  };

export default Tables;