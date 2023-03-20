import PropTypes from 'prop-types';
import { Todo } from '../Todo';

export const TodoList = ({ todos, toggleTodo }) => {
  return (
    <ul>
      {todos.map((todo) => {
        return (
          <li key={todo.id}>
            <Todo todo={todo} toggleTodo={toggleTodo} />
          </li>
        );
      })}
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(Object),
  toggleTodo: PropTypes.func.isRequired
};
