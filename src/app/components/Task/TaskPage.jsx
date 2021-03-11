import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

const TaskPage = (props) => {
  return (
    <div className="container">
      <div className="text-center">
        <h3>The world's leading TodoList application</h3>
      </div>
      <div className="col-md-8">
        <TaskForm />
        <TaskList />
      </div>
    </div>
  );
};

export default TaskPage;
