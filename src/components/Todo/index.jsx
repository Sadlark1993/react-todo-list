import PropTypes from 'prop-types';

export const Todo = ({ todo, toggleTodo }) => {
  return (
    <label>
      <input
        type="checkbox"
        checked={todo.completed}
        onClick={() => {
          toggleTodo(todo.id);
        }}
      />
      {todo.name}
    </label>
  );
};

Todo.propTypes = {
  todo: PropTypes.object.isRequired,
  toggleTodo: PropTypes.func.isRequired
};
