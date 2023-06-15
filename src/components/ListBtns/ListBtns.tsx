import { AiFillEdit } from "react-icons/ai";
import { FaTrash } from "react-icons/fa";

interface BtnProps {
  onDelete: () => void;
  onEdit: () => void;
}

const ListBtns = ({ onDelete, onEdit }: BtnProps) => {
  return (
    <div className="list-btns-container">
      <button onClick={onEdit}>
        <AiFillEdit size={21} />
      </button>

      <button onClick={onDelete}>
        <FaTrash size={14} />
      </button>
    </div>
  );
};

export default ListBtns;
