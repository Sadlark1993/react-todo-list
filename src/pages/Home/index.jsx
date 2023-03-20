import React, { useState } from 'react';

import { Todo } from '../../components/Todo';

function Home() {
  const [todo, setTodo] = useState(['go to supermarket', 'do Embed Systems project']);

  return (
    <>
      <Todo todo={todo.length} />
      <input />
      <button>Add Todo</button>
      <button>Clear Complete</button>
      <div>{todo.length} left to do</div>
    </>
  );
}

export default Home;
