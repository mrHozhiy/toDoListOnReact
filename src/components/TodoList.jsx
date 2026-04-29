import TodoItem from "./TodoItem";

const TodoList = (props) => {
  const { tasks = [] } = props;

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
          // или {...task}
        />
      ))}
    </ul>
  );
};

export default TodoList;
