import React from 'react';
import { connect } from 'react-redux';
import {
  Grid,
  FormControlLabel,
  Checkbox,
  Button
} from '@material-ui/core';
import { deleteTask, checkTask } from './actions';
import store from '../../../store';

const onClick = (id) => (store.dispatch(deleteTask(id)));

const onCheck = (id) => store.dispatch(checkTask(id));

const Task = ({ checked, label, id }) => (
  <Grid container item xs={12}>
    <FormControlLabel
      control={<Checkbox checked={checked} onChange={() => onCheck(id)} />}
      label={label}
    />
    <Button onClick={() => onClick(id)} color="secondary">Delete</Button>
  </Grid>
);

const Tasks = ({ tasks }) => (
  <Grid container item xs={12}>
    {
      tasks.map((task) => (
        <Task
          checked={task.checked}
          label={task.label}
          id={task.id}
          key={task.id}
        />
      ))
    }
  </Grid>
);

const mapToProps = (state) => ({
  tasks: state.tasks
});

export default connect(mapToProps)(Tasks);
