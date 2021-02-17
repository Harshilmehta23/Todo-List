import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import Grid from '@material-ui/core/Grid';

function TodoApp() {
  const initialTodos = [
    { id: 1, task: 'Finish React Course', completed: 'false' },
    { id: 2, task: 'Drink Water', completed: 'true' },
    { id: 3, task: 'Dont use Mobile', completed: 'false' },
  ];
  const [todos, setTodos] = useState(initialTodos);
  const addTodo = (newTodoText) => {
    setTodos([...todos, { id: 4, task: newTodoText, completed: false }]);
  };
  return (
    <Paper
      style={{
        padding: '0',
        margin: '0',
        height: '100vh',
        backgroundColor: '#fafafa',
      }}
      elevation={0}
    >
      <AppBar color='primary' position='static' style={{ height: '64px' }}>
        <ToolBar>
          <Typography color='inherit'>TODOS WITH HOOKS</Typography>
        </ToolBar>
      </AppBar>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} />
    </Paper>
  );
}

export default TodoApp;