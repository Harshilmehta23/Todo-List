import React from 'react';
import useTodoState from './hooks/useTodoState';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import Grid from '@material-ui/core/Grid';

function TodoApp() {
  const initialTodos = [{ id: 1, task: 'Dont use phone', completed: false }];
  const { todos, addTodo, removeTodo, editTodo, toggleTodo } = useTodoState(
    initialTodos
  );

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
      <Grid container justify='center' style={{ marginTop: '1rem' }}>
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm addTodo={addTodo} />
          <TodoList
            todos={todos}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
            editTodo={editTodo}
          />
        </Grid>
      </Grid>
    </Paper>
  );
}

export default TodoApp;
