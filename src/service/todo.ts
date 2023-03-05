import axios from "axios";
import urlJoin from "url-join";
import { TODO_STATUS } from "../constant/todo";
import { fetch } from "./util";

interface TodoViewDataInput {
  icon: string;
  title: string;
  description: string;
  status: TODO_STATUS;
}

interface Todo {
  id: string;
  title: string;
  description: string;
  icon: string;
  status: TODO_STATUS;
  createdAt: string;
  updatedAt: string;
}

interface TodoData{
  total:number,
  todos:Todo[]
}

const baseUrl = "http://localhost:9000";

export const addTodo = async (value: TodoViewDataInput) => {
  return await fetch(async () => {
    const response = await axios.post(urlJoin(baseUrl, "todo"), value);
    return response.data;
  });
};

export const getTodo = async (page:number=0,limit:number=10) => {
  return await fetch<TodoData>(async () => {
    const response = await axios.get(
      urlJoin(baseUrl, "todo", `?page=${page}&limit=${limit}`)
    );
    return response.data;
  });
};
