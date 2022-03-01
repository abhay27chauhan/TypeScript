import React from "react";
import { Todo } from "../../model";
import TodoItem from "../TodoItem/TodoItem";

interface Props {
  todos: Todo[];
}

const TodoList = ({ todos }: Props) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
