import ListBtns from "../ListBtns/ListBtns";

interface TaskProps {
  description: string;
  id: number;
}

interface ListProps {
  tasks: TaskProps[];
}

const List = ({ tasks }: ListProps) => {
  return (
    <div className="task-ctn">
      <ul className="task-list">
        {tasks.map((task) => (
          <li className="task-list-item" key={task.id}>
            <p>{task.description}</p>
            <ListBtns />
          </li>
        ))}
      </ul>
      <button className="clear-btn"> Clear All</button>
    </div>
  );
};

export default List;
