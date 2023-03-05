import { Button, Group, Modal, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { TODO_STATUS } from "../constant/todo";
import { IconMapper } from "../util/IconMapper";

export interface FormValue {
  icon: string;
  title: string;
  description: string;
  status: TODO_STATUS;
}

interface ModalProps {
  opened: boolean;
  onClose: () => void;
  onSubmit: (value: FormValue) => void;
  editData?: FormValue
}

const AddTodoModal = ({ opened, onClose, onSubmit, editData }: ModalProps) => {
  const form = useForm({
    initialValues: {
      icon: "",
      title: "",
      description: "",
      status: TODO_STATUS.TODO,
    },
  });

  if(editData != undefined){
    form.setValues(editData);
  }

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

  const submit = () => {
    const value = form.values;
    onSubmit({ ...value });
    form.reset();
  };

  return (
    <>
      <Modal centered opened={opened} onClose={onClose} title="Add Todo List!">
        <>
          {icons}
          <TextInput label="icon" {...form.getInputProps("icon")} readOnly />
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
        </>
        <Group sx={{ marginTop: "10px" }} position="right">
          <Button
            onClick={submit}
            variant="gradient"
            gradient={{ from: "teal", to: "lime", deg: 105 }}
          >
            Add Todo!!!
          </Button>
        </Group>
      </Modal>
    </>
  );
};

export default AddTodoModal;
