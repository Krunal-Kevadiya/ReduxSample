import { createReducer, createActions } from 'reduxsauce';
import InitialState from '../InitialState';

// Redux Sauce Types & Actions
export const { Types, Creators } = createActions({
  add: ['payload'],
  update: ['payload'],
  delete: ['payload']
});

// Handle Actions
const addHandler = (state = InitialState, action) => {
  const tempList = state.todoList;  
  tempList.push(action.payload);
  return { ...state, todoList: tempList };
}

const updateHandler = (state = InitialState, action) => {
  let tempList = state.todoList;
  const index = tempList.findIndex(todo => todo.id === action.payload.id)
  if(index !== -1) {
    tempList[index] = action.payload;
  }
  return { ...state, todoList: tempList };
}

const deleteHandler = (state = InitialState, action) => {
  const tempList = state.todoList.filter(todo => todo.id != action.payload.id);
  return { ...state, todoList: tempList };
}

const handlers = {
  [Types.ADD]: addHandler,
  [Types.UPDATE]: updateHandler,
  [Types.DELETE]: deleteHandler
}

const reducer = createReducer(InitialState, handlers);

export default reducer;
