import { useEffect, useState } from "react";
import { getTasks } from "../../api/task.api";
import TaskCard from "../components/TaskCard";

function HomePage() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function loadTasks() {
      const res = await getTasks();
      console.log(res);
      setTasks(res.data);
    }
    loadTasks();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-2">
      {tasks.map((task) => (
        <TaskCard {...task} key={task._id} />
      ))}
    </div>
  );
}

export default HomePage;
