//import styles from './List.module.scss';
//import { useSelector } from 'react-redux';
//import { getAllColumns } from '../../redux/store';
import SingleTable from "../SingleTable/SingleTable";

const Tables = () => {

  //const columns = useSelector(getAllColumns);
  const tables = []

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