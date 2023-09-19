//import styles from './Card.module.scss';
//import { useDispatch } from 'react-redux';
import { useState } from 'react';
//import { removeTable, updateTables } from '../../../redux/tableReducer';
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector';
import { getTableById, getAllTables } from '../../../redux/tableReducer';
import { Link } from 'react-router-dom';
import { Col, Row, Button } from "react-bootstrap";
import PropTypes from "prop-types";

const SingleTableOverview = props => {

  const singleTableData = useSelector(state => getTableById(state, props.id));

  const [id] = useState(singleTableData.id); 
  const [status] = useState(singleTableData.status); 

  return (
    <li className="col-12">
      <Row className="d-flex align-items-center justify-content-start mb-2">
        <Col className="col-4">
          <h4>Table {id}</h4>
        </Col>
        <Col className="col-4 d-flex flex-row align-items-center justify-content-center">
          <h5>{status}</h5>
        </Col>
        <Col className="col-4">
          <Link to={`/table/${props.id}`}>
            <Button variant="primary">
              See More
            </Button>
          </Link>
        </Col>
      </Row>
      
    </li>
  );
};

export default SingleTableOverview;