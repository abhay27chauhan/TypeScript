import React from "react";
import { Todo } from "../../model";

import "./styles.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void
}

export const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  return (
    <form className="input" onSubmit={handleAdd}>
      <input
        type="text"
        placeholder="Enter a Todo"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className="input__box"
      />
      <button type="submit" className="input_submit">
        GO
      </button>
    </form>
  );
};
