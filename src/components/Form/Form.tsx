import "../../index.css";
import { FieldValues, useForm } from "react-hook-form";

interface FormProps {
  onSubmit: (data: FieldValues) => void;
}

const Form = ({ onSubmit }: FormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  return (
    <form
      className="form"
      onSubmit={handleSubmit((data) => {
        console.log(onSubmit);
        onSubmit(data);
        reset();
      })}
    >
      {/* <p className="form-alert">ALERT</p> */}
      <h3>Todo List</h3>

      <div className="form-control">
        <input
          {...register("description", { required: true })}
          type="text"
          id="form-task"
          placeholder="Write your task here"
        />
        <button type="submit" className="form-btn">
          Submit
        </button>
      </div>
      {errors.description?.type === "required" && (
        <small className="form-erro-text">Task is required</small>
      )}
    </form>
  );
};

export default Form;
