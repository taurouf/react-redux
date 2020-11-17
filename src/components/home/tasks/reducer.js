import { actionsType } from './actions';

const initalState = [
  {
    id: '1',
    label: 'Dormir',
    checked: false
  },
  {
    id: '2',
    label: 'Manger',
    checked: false
  }
];

/**
 * Add task
 * @param { Object } state
 * @param { Object } action
 * @return { Object } stateUpdated
 */
const addTask = (state, action) => state.concat([
  {
    id: String(state.length + 1),
    label: action.value,
    checked: false
  }
]);

const deleteTask = (state, action) => state.filter((task) => task.id !== action.id);

const checkTask = (state, action) => {
  const tempArray = [];

  state.forEach((task) => {
    if (task.id === action.id) {
      // eslint-disable-next-line no-param-reassign
      task.checked = !task.checked;
      // eslint-disable-next-line no-console
      console.log(task.id, action.id);
    }
    tempArray.push(task);
  });
  // eslint-disable-next-line no-console
  console.log(tempArray);
  return tempArray;
};

const tasks = (state = initalState, action) => {
  switch (action.type) {
    case actionsType.ADD_TASK:
      return addTask(state, action);
    case actionsType.DELETE_TASK:
      return deleteTask(state, action);
    case actionsType.CHECK_TASK:
      return checkTask(state, action);
    default:
      return state;
  }
};

export default tasks;
