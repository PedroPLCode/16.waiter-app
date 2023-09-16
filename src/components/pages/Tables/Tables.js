//import styles from './List.module.scss';
import SingleTableOverview from "../SingleTable/SingleTable";
import { getAllTables } from "../../../redux/tableReducer";
import { useSelector } from 'react-redux';

const Tables = () => {

  const tables = useSelector(getAllTables);

    return (
      <div>
          {tables.map(table =>
                <SingleTableOverview
                key={table.id}
                {...table} />
                )}
      </div>
    );
  };

export default Tables;