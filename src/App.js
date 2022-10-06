import React, { useState } from "react";
import './App.css';

function Todos(props) {
  return (
    <div className="squareStyle">
      <div>{props.todo.content} </div>
      <div>{props.todo.name}</div>
    </div>
  );
}

function App() {

  const [todo, setTodos] = useState([
    { id: 1, content: "리액트 공부하기" },
    { id: 2, content: "리액트 시험보기" },
  ])

  const [inputs, setInputs] = useState({
    content:""
  });

  const changeHandler = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]  : e.target.value 
    });
  };

  const submitBtn = (e) => {

    e.preventDefault();

    setTodos([...todo, {
      content: inputs.content,
    }]);

    setInputs({
      content: ""
    })

    };

  return (
    <div>
    <div className="inputItems">
    <center>
      <input
      type="text"
      name="content"
      value={inputs.content}
      autoComplete="off"
      onChange={changeHandler}
      />
      <button
      type="submit"
      onClick={submitBtn}
      >
      추가하기
      </button>
    <h1>Todo List</h1>
    </center>
    </div>

    <div className="todoItems">
      {todo.map((todo) => {
          return <Todos todo={todo} key={todo.id} />;
      })}
    </div>
    </div>

  );
}

export default App;
