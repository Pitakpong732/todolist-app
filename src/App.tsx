import { Center, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconAnchorOff } from "@tabler/icons";
import ToDoList from "./components/ToDoList";
import { IconMapper } from "./util/IconMapper";

const dataTodoList = [
  {
    icon: IconAnchorOff,
    title: "todolist ที่ 1",
    description: "เรืแดฟหกงกดสหก",
  },
  {
    title: "todolist ที่ 2",
    description: "เรืแดฟหกงกดสหกด ทม รา",
  },
];

function App() {
  const form = useForm({
    initialValues: {
      icon: "",
      title: "",
      description: "",
    },
  });

  const icons = Object.entries(IconMapper).map((item) => {
    const [key, value] = item;
    const IconComponent = value;
    return (
      <IconComponent
        key={key}
        onClick={() => {
          form.setFieldValue("icon", key);
        }}
      />
    );
  });

  return (
    <div>
      {icons}
      <TextInput label="icon" {...form.getInputProps("icon")} />
      <TextInput
        label="title"
        placeholder="กรอกกูสักหน่อย"
        {...form.getInputProps("title")}
      />
      <TextInput
        label="description"
        placeholder="กรอกกูสักหน่อย"
        {...form.getInputProps("description")}
      />
      <Center sx={{ width: "100vw", height: "100vh" }}>
        <ToDoList data={dataTodoList} />
      </Center>
    </div>
  );
}

export default App;
