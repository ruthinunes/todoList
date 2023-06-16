import "../../index.css";
import { useForm } from "react-hook-form";
import { useState } from "react";

interface FormData {
  onSubmit: (data: TaskProps) => void;
}

interface TaskProps {
  description: string;
}

const Form = ({ onSubmit }: FormData) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TaskProps>();

  return (
    <form
      className="form"
      onSubmit={handleSubmit((data) => {
        onSubmit(data);
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 1000);
        reset();
      })}
    >
      <p className={`form-alert ${isSubmitted ? "form-alert-visible" : ""}`}>
        Item added
      </p>
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
