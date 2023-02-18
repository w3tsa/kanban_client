import AddTask from "./AddTask.jsx";
import TasksContainer from "./TasksContainer.jsx";
import Nav from "./Nav.jsx";
import socketIO from "socket.io-client";

const socket = socketIO.connect("http://localhost:5000");

const Task = () => {
  return (
    <div>
      <Nav />
      <AddTask socket={socket} />
      <TasksContainer socket={socket} />
    </div>
  );
};

export default Task;
