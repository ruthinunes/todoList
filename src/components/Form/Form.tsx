import "../../index.css";

const Form = () => {
  return (
    <form className="form">
      <p className="form-alert">ALERT</p>
      <h3>Todo List</h3>

      <div className="form-control">
        <input type="text" id="form-task" placeholder="Write your task here" />
        <button type="submit" className="form-btn">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
