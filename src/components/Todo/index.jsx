import PropTypes from 'prop-types';

export const Todo = ({ todo }) => {
  return <h1>{todo}</h1>;
};

Todo.propTypes = {
  todo: PropTypes.number
};
