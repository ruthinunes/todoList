import Form from "../Form/Form";
import ListBtns from "../ListBtns/ListBtns";
import   data from "../../../data/tasks.json";
import { useState } from "react";

const List = () => {
  const [tasks, setTasks] =   useState(data);

  return (
    <>
      <Form
        onSubmit={(newTask) =>
          setTasks([
            ...tasks,
            { description: newTask.description, id: tasks.length + 1 },
          ])
        }
      />
      <div className="task-ctn">
        <ul className="task-list">
          {tasks.map((task) => (
            <li className="task-list-item" key={task.id}>
              <p>{task.description}</p>
              <ListBtns
                onDelete={() =>
                  setTasks(
                    tasks.filter((currentTask) => currentTask.id !== task.id)
                  )
                }
                onEdit={() => console.log(task.id)}
              />
            </li>
          ))}
        </ul>
        <button className="clear-btn"> Clear All</button>
      </div>
    </>
  );
};

export default List;
