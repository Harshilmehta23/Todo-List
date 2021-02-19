import React, { createContext } from 'react';
import useTodoState from '../hooks/useTodoState';

const defaultTodos = [
  { id: 1, task: 'Drink Water', completed: false },
  { id: 2, task: 'Complete This Course', completed: true },
];
export const TodosContext = createContext();

export function TodosProvider(props) {
  const todosStuff = useTodoState(defaultTodos);
  return (
    <TodosContext.Provider value={todosStuff}>
      {props.children}
    </TodosContext.Provider>
  );
}
