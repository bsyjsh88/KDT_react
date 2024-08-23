import React from "react";
import "./TodoItem.css"

const TodoItem = ({ todo, onRemove, onImportant }) => {
  return (
    <div className="todo-item">
      <span className={todo.important ? "important" : ""}>{todo.text}</span>
      <button onClick={() => onImportant(todo.id)}>
        {todo.important ? "중요 해제" : "중요"}
      </button>
      <button onClick={() => onRemove(todo.id)}>삭제</button>
    </div>
  );
};

export default TodoItem;
