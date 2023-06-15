import "../../index.css";
import { FieldValues, useForm } from "react-hook-form";

interface FormProps {
  onSubmit: (data: FieldValues) => void;
}

const Form = ({onSubmit} : FormProps) => {
  const { register, handleSubmit } = useForm();

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <p className="form-alert">ALERT</p>
      <h3>Todo List</h3>

      <div className="form-control">
        <input
          {...register("description")}
          type="text"
          id="form-task"
          placeholder="Write your task here"
        />
        <button type="submit" className="form-btn">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
