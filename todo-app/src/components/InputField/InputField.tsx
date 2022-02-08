import React from "react";

import "./styles.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}

export const InputField = ({ todo, setTodo }: Props) => {
  return (
    <form className="input">
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
