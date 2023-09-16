//import styles from './List.module.scss';
import SingleTable from "../SingleTable/SingleTable";
import { getAllTables } from "../../../redux/tableReducer";
import { useSelector } from 'react-redux';

const Tables = () => {

  const tables = useSelector(getAllTables);
  console.log(tables);

    return (
      <div>
          {tables.map(table =>
                <SingleTable 
                key={table.id}
                {...table} />
                )}
      </div>
    );
  };

export default Tables;