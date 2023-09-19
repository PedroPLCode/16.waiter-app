import { useParams } from 'react-router';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { getTableById } from '../../../redux/tableReducer';
import { Navigate } from 'react-router-dom';
import SingleTableForm from '../SingleTableForm/SingleTableForm';

const SingleTableDetails = () => {

  const { tableId } = useParams();
  const singleTableData = useSelector(state => getTableById(state, parseInt(tableId)));

  if (!singleTableData) {
    return <Navigate to="/" />; 
  } else {
    return (
      <div className="col-12 d-flex flex-column justify-content-center aling-items-center">
        <h4 className='mt-4'>Table {tableId}</h4>
        <SingleTableForm />
      </div>
          );
  }
};

export default SingleTableDetails;