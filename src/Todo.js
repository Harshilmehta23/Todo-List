import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import CheckBox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ListItemSecondatyAction from '@material-ui/core/ListItemSecondaryAction';

function Todo({ task, completed }) {
  return (
    <ListItem>
      <CheckBox tabIndex={-1} checked={completed} />
      <ListItemText
        style={{ textDecoration: completed ? 'line-through' : 'none' }}
      >
        {task}
      </ListItemText>
      <ListItemSecondatyAction>
        <IconButton aria-label='Edit'>
          <EditIcon />
        </IconButton>
        <IconButton aria-label='Delete'>
          <DeleteIcon />
        </IconButton>
      </ListItemSecondatyAction>
    </ListItem>
  );
}

export default Todo;
