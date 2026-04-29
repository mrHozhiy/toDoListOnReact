import AddTaskForm from "./AddTaskForm";
import SearchTaskForm from "./SearchTaskForm";
import TodoInfo from "./TodoInfo";
import TodoList from "./TodoList";

const Todo = () => {
  const tasks = [
    { id: "task-1", title: "купить молоко", isDone: false },
    { id: "task-2", title: "погладить кота", isDone: true },
    { id: "task-3", title: "поспать", isDone: false },
  ];

  const deleteAllTasks = () => {
    console.log("Удаляем все задачи!");
  };
  const deleteTask = (taskId) => {
    console.log(`Удаляем задачу с id: ${taskId}!`);
  };
  const toggleTaskComplete = (taskId, isDone) => {
    console.log(`задача с ${taskId} ${isDone ? "выполнена" : "не выполнена"}`);
  };
  const filterTasks = (query) => {
    console.log(`поиск: ${query}`);
  };
  const addTask = () => {
    console.log("задача дабавлена!");
  };

  return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <AddTaskForm addTask={addTask} />
      <SearchTaskForm onSearchInput={filterTasks} />
      <TodoInfo
        total={tasks.length}
        done={tasks.filter(({ isDone }) => isDone).length}
        onDeleteAllButtonClick={deleteAllTasks}
      />
      <TodoList
        tasks={tasks}
        onDeleteTaskButtonClick={deleteTask}
        onTaskCompleteChange={toggleTaskComplete}
      />
    </div>
  );
};

export default Todo;
