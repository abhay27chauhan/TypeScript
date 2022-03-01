import React from 'react';
import { Todo } from '../../model';

interface Props {
  todo: Todo
}

const TodoItem: React.FC<Props> = ({ todo }) => {
  return <div>{todo.todo}</div>;
};

export default TodoItem;
