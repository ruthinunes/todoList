import ListBtns from "../ListBtns/ListBtns";

interface TaskProps {
  id: number;
  description: string;
}

interface ListProps {
  tasks: TaskProps[];
  onDelete: (id: number) => void;
  onEdit: (id: number) => void;
  onClearAll: () => void;
}

const List = ({ tasks, onDelete, onEdit, onClearAll }: ListProps) => {
  if (tasks.length === 0) return null;
  return (
    <div className="task-ctn">
      <ul className="task-list">
        {tasks.map((task) => (
          <li className="task-list-item" key={task.id}>
            <p>{task.description}</p>
            <ListBtns id={task.id} onDelete={onDelete} onEdit={onEdit} />
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
