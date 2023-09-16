//import styles from './List.module.scss';
import SingleTable from "../SingleTable/SingleTable";
import { getAllTables } from '../../redux/store';
import { useSelector } from 'react-redux';

const Tables = () => {

  const tables = useSelector(getAllTables);

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