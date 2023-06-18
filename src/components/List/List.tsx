import { FaTrash } from "react-icons/fa";

interface TaskProps {
  id: number;
  description: string;
}

interface ListProps {
  tasks: TaskProps[];
  onDelete: (id: number) => void;
  onClearAll: () => void;
}

const List = ({ tasks, onDelete, onClearAll }: ListProps) => {
  if (tasks.length === 0) return null;

  return (
    <div className="task-ctn">
      <ul className="task-list">
        {tasks.map((task) => (
          <li className="task-list-item" key={task.id}>
            <p>{task.description}</p>
            <button onClick={() => onDelete(task.id)}>
              <FaTrash size={14} />
            </button>
          </li>
        ))}
      </ul>
      <button className="clear-btn" onClick={onClearAll}>
        Clear All
      </button>
    </div>
  );
};

export default List;
