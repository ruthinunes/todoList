import { AiFillEdit } from "react-icons/ai";
import { FaTrash } from "react-icons/fa";

interface BtnProps {
  id: number;
  onDelete: (id: number) => void;
  onEdit: (id: number) => void;
}

const ListBtns = ({ id, onDelete, onEdit }: BtnProps) => {
  return (
    <div className="list-btns-container">
      <button onClick={() => onEdit(id)}>
        <AiFillEdit size={21} />
      </button>

      <button onClick={() => onDelete(id)}>
        <FaTrash size={14} />
      </button>
    </div>
  );
};

export default ListBtns;
