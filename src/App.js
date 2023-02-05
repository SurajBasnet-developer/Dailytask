import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import CardContent from "@mui/material/CardContent";
import "./index.css";

const App = () => {
  const [input, setInput] = useState("");

  const [todos, setTodos] = useState([]);
  const Add = () => {
    setTodos([...todos, input]);
  };
  return (
    <center>
      <CardContent>
        <div>
          <h3>Todo list</h3>
          <TextField
            onChange={(event) => setInput(event.target.value)}
            id="outlined-basic"
            label="Add your tasks"
            variant="outlined"
          />
          <br /> <br></br>
          <Button onClick={() => Add()} variant="contained">
            Add Tasks
          </Button>
          <ol className="center">
            {todos.map((todo) => (
              <li>{todo}</li>
            ))}
          </ol>
        </div>
      </CardContent>
    </center>
  );
};

export default App;
