//import shortid from 'shortid';

//selectors
export const getAllTables = (state) => state.tables;

// actions
const createActionName = actionName => `app/tables/${actionName}`;
const REMOVE_TABLE = createActionName("REMOVE_TABLE");
const ADD_TABLE = createActionName("ADD_TABLE");
const UPDATE_TABLE = createActionName("UPDATE_TABLE");

export const addTable = payload => ({ type: ADD_TABLE, payload });
export const removeTable = payload => ({ type: REMOVE_TABLE, payload });
export const updateTables = payload => ({ type: UPDATE_TABLE, payload });
export const fetchTables = () => {
  return (dispatch) => {
    fetch('http://localhost:3131/api/tables')
      .then(response => response.json())
      .then(tables => dispatch(updateTables(tables)));
  }
};
export const addTableRequest = newTable => {
  return (dispatch) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTable),
    };
    fetch(`http://localhost:3131/api/tables`, options)
      .then(() => dispatch(addTable(newTable)))
  }
};
export const removeTableRequest = tableId => {
  return (dispatch) => {
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    };
    fetch(`http://localhost:3131/api/tables/${tableId.toString()}`, options)
      .then(() => dispatch(removeTable(tableId)))
  }
};

// action creators
const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_TABLE: 
      return { ...statePart, tables: [...statePart.tables, { ...action.payload }]};
    case REMOVE_TABLE: 
      return { ...statePart, tables: [...statePart.tables.filter(table => action.payload !== table.id)]};
    case UPDATE_TABLE:
      return { ...statePart, tables: action.payload};
    default:
      return statePart;
  };
};

export default tablesReducer;