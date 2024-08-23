import { useState, useRef, useCallback } from "react";
import { useFormik } from "formik";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "가가가가가가",
      importent: true,
    },
    {
      id: 2,
      text: "나나나나나나나",
      importent: false,
    },
    {
      id: 3,
      text: "다다다다다다",
      importent: false,
    },
  ]);

  const nextId = useRef(4);

  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        importent: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos]
  );

  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos]
  );

  const onImportant = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) => 
          todo.id === id ? { ...todo, importent: !todo.importent } : todo
        )
      )
    },
    [todos]
  );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onImportant={onImportant}/>
    </TodoTemplate>
  )


}

export default App;