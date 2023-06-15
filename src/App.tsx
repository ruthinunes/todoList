import Form from "./components/Form/Form";
import List from "./components/List/List";
import data from "../data/tasks.json";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState(data);

  return (
    <>
      <div className="container">
        <Form
          onSubmit={(newTask) =>
            setTasks([
              ...tasks, //Setting id to timestamp to avoid duplicity
              { id: new Date().getTime(), description: newTask.description },
            ])
          }
        />
        <List
          tasks={tasks}
          onDelete={(id) => setTasks(tasks.filter((task) => task.id !== id))}
          onEdit={(id) => console.log(id)}
          onClearAll={() => setTasks([])}
        />
      </div>
    </>
  );
}

export default App;
