import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:4000/api" });

export const getTasks = async () => await API.get("/tasks");

export const createTask = async (task) => await API.post("/tasks", task);

export const getTask = async (id) => await API.get(`/tasks/${id}`);

export const updateTask = async (id, task) =>
  await API.put(`/tasks/${id}`, task);

export const deleteTask = async (id) => await API.delete(`/tasks/${id}`);
