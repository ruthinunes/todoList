import Form from "./components/Form/Form";
import List from "./components/List/List";

function App() {
  const tasks = [
    { id: 1, description: "AAA" },
    { id: 2, description: "BBB" },
    { id: 3, description: "CCC" },
    { id: 4, description: "DDD" },
  ];

  return (
    <>
      <div className="container">
        <Form />
        <List tasks={tasks} />
      </div>
    </>
  );
}

export default App;