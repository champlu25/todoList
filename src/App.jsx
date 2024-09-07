import { useEffect, useState } from "react";
import styles from "./app.module.css";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((loadedData) => {
        setTodos(loadedData);
        console.log(loadedData);
      });
  }, []);
  return (
    <>
      <div className={styles.todosContainer}>
        {todos.map(({ id, title }) => (
          <li className={styles.todoWrapper} key={id}>
            <input type="checkbox" />
            {title}
          </li>
        ))}
      </div>
    </>
  );
}

export default App;
