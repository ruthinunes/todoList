import { AiFillEdit } from "react-icons/ai";
import { FaTrash } from 'react-icons/fa'

const ListBtns = () => {
  return (
    <div className="list-btns-container">
      <button>
        <AiFillEdit size={21}/>
      </button>
      <button>
        <FaTrash size={14} />
      </button>
    </div>
  );
};

export default ListBtns;
