import { useState } from "react";

function App() {
  const [inputTerm, setInputTerm] = useState("");
  const [todos, setTodos] = useState([]);

  function addTodo() {
    setTodos((prev) => [
      ...prev,
      {
        id: todos.length + 1,
        title: inputTerm,
        done: false,
        children: null,
      },
    ]);
    setInputTerm("");
  }
  function handleInput(e) {
    setInputTerm(e.target.value);
    console.log(inputTerm);
  }

  function deleteTodo(i) {
    const filteredTodo = todos.filter((todo) => {
      return todo.id !== i;
    });
    setTodos(filteredTodo);
  }

  function toggleCompleted(id) {
    const toggledTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, done: !todo.done };
      }
      return todo;
    });
    setTodos(toggledTodos);
  }

  return (
    <>
      <input value={inputTerm} type="text" onInput={handleInput} />
      <button disabled={inputTerm.length === 0} onClick={addTodo}>
        Add
      </button>
      <ul>
        {todos.map((todo, i) => (
          <li key={i}>
            {todo.title} : <p>{todo.done ? "Done" : "Not Done"}</p>
            <button onClick={() => toggleCompleted(todo.id)}>
              Toggle "Done"
            </button>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
