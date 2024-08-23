import React from "react";
import TodoItem from "../TodoItem"
import "./TodoList.css"

const TodoList = ({ todos, onRemove, onImportant}) => {
    return (
        <div>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onRemove={onRemove}
              onImportant={onImportant} 
            />
          ))}
        </div>
      );
    };

export default TodoList;