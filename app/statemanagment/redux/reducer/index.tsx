import { types } from '../types';
import { TodoData } from '../../../data';
import InitialState from '../../InitialState';

export const reducerNormal = (state = InitialState, action) => {
  const { type, payload } = action
  let tempList: TodoData[] = state.todoList;

  switch (type) {
    case types.add:  
      tempList.push(payload);
      return { ...state, todoList: tempList };

    case types.delete:
      tempList = state.todoList.filter(todo => todo.id !== payload.id);
      return { ...state, todoList: tempList };

    case types.update:
      const index = tempList.findIndex(todo => todo.id === payload.id)
      if(index !== -1) {
        tempList[index] = payload;
      }
      return { ...state, todoList: tempList };

    default:
      return state
  }
}
