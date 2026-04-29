import TodoItem from "./TodoItem";

const TodoList = (props) => {
  const { tasks = [], onDeleteTaskButtonClick, onTaskCompleteChange } = props;

  const hasTasks = true;

  if (!hasTasks) {
    return <div className="todo__empty-message"></div>;
  }
  return (
    <ul className="todo__list">
      {tasks.map((task) => (
        <TodoItem
          className="todo__item"
          kye={task.id}
          id={task.id}
          title={task.title}
          isDone={task.isDone}
          onDeleteTaskButtonClick={onDeleteTaskButtonClick}
          onTaskCompleteChange={onTaskCompleteChange}
          // или {...task}
        />
      ))}
    </ul>
  );
};

export default TodoList;
