import React, { useState } from "react";

import { InputField } from "./components/InputField/InputField";

import "./App.css";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");

  return (
    <div className="App">
      <h1 className="heading">Taskify</h1>
      <InputField todo={todo} setTodo={setTodo} />
    </div>
  );
};

export default App;
