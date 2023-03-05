import {
  ThemeIcon,
  useMantineTheme,
  Text,
  SimpleGrid,
  Group,
  CloseButton,
  Badge,
  Button,
} from "@mantine/core";
import { IconArmchair, IconEdit, TablerIcon } from "@tabler/icons";
import styled from "@emotion/styled";
import { TODO_STATUS } from "../constant/todo";

interface FeatureProps {
  icon?: TablerIcon;
  title: React.ReactNode;
  description: React.ReactNode;
  status: TODO_STATUS;
  onDelete: () => void;
  onEdit: () => void;
}

const FeatureContainer = styled.div`
  border: 1px solid teal;
  border-radius: 5px;
  padding: 30px;
  margin: 10px;
`;

const GetStatusString = (status: TODO_STATUS) => {
  console.log(status);
  switch (status) {
    case TODO_STATUS.DOING: {
      return <Badge color="yellow">Doing</Badge>;
    }
    case TODO_STATUS.TODO: {
      return <Badge>Todo</Badge>;
    }
    case TODO_STATUS.DONE: {
      return <Badge color="green">Done</Badge>;
    }
  }
};

export function Feature({
  icon: Icon = IconArmchair,
  title,
  description,
  status,
  onDelete,
  onEdit,
}: FeatureProps) {
  const theme = useMantineTheme();
  return (
    <FeatureContainer>
      <Group position="apart">
        <ThemeIcon variant="light" size={40} radius={40}>
          <Icon size={20} stroke={1.5} />
        </ThemeIcon>
        <Group position="right">
          <Button
            variant="subtle"
            size="xs"
            style={{ width: "44px", height: "44px" }}
            onClick={onEdit}
          >
            <ThemeIcon variant="light" size="xs" color="cyan" bg="none">
              <IconEdit />
            </ThemeIcon>
          </Button>
          <CloseButton
            onClick={onDelete}
            title="Close popover"
            size="xl"
            iconSize={20}
          />
        </Group>
      </Group>
      {GetStatusString(status)}
      <Text style={{ marginTop: theme.spacing.sm, marginBottom: 7 }}>
        {title}
      </Text>
      <Text size="sm" color="dimmed" style={{ lineHeight: 1.6 }}>
        {description}
      </Text>
    </FeatureContainer>
  );
}

interface ToDoListProps {
  data: Omit<FeatureProps, "onDelete"|"onEdit">[];
  onDelete: (index: number) => void;
  onEdit: (index: number) => void;
}

const ToDoList = ({ data, onDelete, onEdit }: ToDoListProps) => {
  const { spacing } = useMantineTheme();
  const onClickDelete = (index: number) => {
    onDelete(index);
  };
  const onClickEdit = (index: number) => {
    onEdit(index);
  };
  return (
    <SimpleGrid
      mt={60}
      cols={3}
      spacing={spacing.xl * 2}
      breakpoints={[
        { maxWidth: 980, cols: 2, spacing: "xl" },
        { maxWidth: 755, cols: 1, spacing: "xl" },
      ]}
    >
      {data.map((item, index) => (
        <Feature
          key={index}
          icon={item.icon}
          title={item.title}
          description={item.description}
          status={item.status}
          onDelete={() => {
            onClickDelete(index);
          }}
          onEdit={() => {
            onClickEdit(index);
          }}
        />
      ))}
    </SimpleGrid>
  );
};

export default ToDoList;
