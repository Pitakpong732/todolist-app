import { Button, Center, Pagination, Stack } from "@mantine/core";
import { TablerIcon } from "@tabler/icons";
import { useState, useEffect } from "react";
import AddTodoModal, { FormValue } from "../components/AddTodoModal";
import ToDoList from "../components/ToDoList";
import { TODO_STATUS } from "../constant/todo";
import { addTodo, getTodo } from "../service/todo";
import { IconMapper } from "../util/IconMapper";
import { usePagination } from "@mantine/hooks";

interface TodoViewData {
  icon: TablerIcon;
  title: string;
  description: string;
  status: TODO_STATUS;
}

const limit: number = 9;

const ToDo = () => {
  const [opend, setOpened] = useState(false);
  const [todoData, setTodoData] = useState<TodoViewData[]>([]);
  const [todoTotal, setTodoTotal] = useState(0);

  const fetchTodoList = async (page: number, limit: number) => {
    const responseData = await getTodo(page, limit);
    const todolist = responseData.todos.map((item) => {
      const { icon, description, title, status } = item;
      const newObj = {
        icon: IconMapper[icon],
        description,
        title,
        status,
      };
      return newObj;
    });
    setTodoData(todolist);
    const pageTotal = (responseData.total + limit - 1) / limit;
    setTodoTotal(pageTotal);
    console.log("pageTotal :", pageTotal);
  };

  const pagination = usePagination({
    total: todoTotal,
    initialPage: 1,
    onChange: (page: number) => {
      fetchTodoList(page - 1, limit);
    },
  });

  useEffect(() => {
    fetchTodoList(0, limit);
  }, []);

  const submitAddTodo = async (value: FormValue) => {
    const { icon, description, title, status } = value;
    const newObj = {
      icon,
      description,
      title,
      status,
    };
    addTodo(newObj);
    fetchTodoList(0, limit);
    setOpened(false);
  };

  const onDelete = (index: number) => {
    setTodoData((data) => {
      let newObj = [...data];
      newObj.splice(index, 1);
      return newObj;
    });
  };

  const onEdit = (index: number) => {
    setOpened(true);
  };

  return (
    <>
      <AddTodoModal
        opened={opend}
        onClose={() => {
          setOpened(false);
        }}
        onSubmit={submitAddTodo}
      />
      <div>
        <Center inline sx={{ width: "100vw", height: "100vh" }}>
          <Stack align="flex-start">
            <Button
              onClick={() => {
                setOpened(true);
              }}
              variant="gradient"
              gradient={{ from: "teal", to: "lime", deg: 105 }}
            >
              Add Todo!!!
            </Button>
            <ToDoList data={todoData} onDelete={onDelete} onEdit={onEdit} />
            <Pagination
              page={pagination.active}
              onChange={pagination.setPage}
              total={todoTotal}
            />
          </Stack>
        </Center>
      </div>
    </>
  );
};

export default ToDo;
