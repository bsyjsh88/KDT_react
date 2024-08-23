
import "../TodoTemplate/TodoTemplate.css";

const TodoTemplate = ({ children }) => {
  return (
    <div className="TodoTemplate">
      <div className="app-title">할일</div>
      <div className="content">{children}</div>
    </div>
  );
};

export default TodoTemplate;