import { useForm } from "react-hook-form";
import { createTask, getTask, updateTask } from "../../api/task.api";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { deleteTask } from "../../api/task.api";

function TaskFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const [tags, setTags] = useState([]);

  const navigate = useNavigate();
  const params = useParams();

  const handleDelete = async (id) => {
    const res = await deleteTask(id);
    if (res.status === 204) {
      navigate("/");
    }
  };

  useEffect(() => {
    if (!params.id) return;

    async function loadTask() {
      const res = await getTask(params.id);
      setValue("title", res.data.title);
      setValue("description", res.data.description);

      setTags(res.data.tags);
    }
    loadTask();
  }, [params.id, setValue]);

  const onSubmit = handleSubmit(async (data) => {
    if (!params.id) {
      await createTask({
        ...data,
        tags,
      });
    } else {
      await updateTask(params.id, {
        ...data,
        tags,
      });
    }

    navigate("/");
  });

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Task Title"
          autoFocus
          {...register("title", { required: true })}
        />
        {errors?.title && <p>title is required</p>}

        <textarea
          name="description"
          rows="10"
          placeholder="Task Description"
          {...register("description", { required: true })}
        ></textarea>
        {errors?.description && <p>description is required</p>}

        <button type="submit" className="btn light-blue darken-4">
          Send
        </button>
      </form>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setTags([...tags, e.target[0].value]);
          e.target[0].value = "";
        }}
      >
        <input type="text" placeholder="Write a tag" />
      </form>

      <ul>
        {tags.map((tag, i) => (
          <li key={i} className="text-white">
            {tag}

            <button
              onClick={() => {
                setTags(tags.filter((t) => t !== tag));
              }}
            >
              x
            </button>
          </li>
        ))}
      </ul>

      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => handleDelete(params.id)}
      >
        delete
      </button>
    </>
  );
}

export default TaskFormPage;
