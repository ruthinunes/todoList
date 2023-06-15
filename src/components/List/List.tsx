import ListBtns from "../ListBtns/ListBtns";
import taskData from "../../../data/tasks.json";
import { useState } from "react";

const List = () => {
  const [tasks, setTask] = useState(taskData);

  return (
    <div className="task-ctn">
      <ul className="task-list">
        {tasks.map((task) => (
          <li className="task-list-item" key={task.id}>
            <p>{task.description}</p>

            <ListBtns
              onDelete={() =>
                setTask(tasks.filter((currentTask) => currentTask.id !== task.id))
              }
              onEdit={() => console.log(task.id)}
            />
          </li>
        ))}
      </ul>

      <button className="clear-btn"> Clear All</button>
    </div>
  );
};

export default List;
