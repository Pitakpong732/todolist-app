import {
  ThemeIcon,
  useMantineTheme,
  Text,
  SimpleGrid,
} from "@mantine/core";
import {
    IconArmchair,
  IconCookie,
  IconGauge,
  IconLock,
  IconMessage2,
  IconUser,
  TablerIcon,
} from "@tabler/icons";
import styled from "@emotion/styled";

const MOCKDATA = [
  {
    icon: IconGauge,
    title: "Extreme performance",
    description:
      "This dust is actually a powerful poison that will even make a pro wrestler sick, Regice cloaks itself with frigid air of -328 degrees Fahrenheit",
  },
  {
    icon: IconUser,
    title: "Privacy focused",
    description:
      "People say it can run at the same speed as lightning striking, Its icy body is so cold, it will not melt even if it is immersed in magma",
  },
  {
    icon: IconCookie,
    title: "No third parties",
    description:
      "They’re popular, but they’re rare. Trainers who show them off recklessly may be targeted by thieves",
  },
  {
    icon: IconLock,
    title: "Secure by default",
    description:
      "Although it still can’t fly, its jumping power is outstanding, in Alola the mushrooms on Paras don’t grow up quite right",
  },
  {
    icon: IconMessage2,
    title: "24/7 Support",
    description:
      "Rapidash usually can be seen casually cantering in the fields and plains, Skitty is known to chase around after its own tail",
  },
];

interface FeatureProps {
  icon?: TablerIcon;
  title: React.ReactNode;
  description: React.ReactNode;
}

const FeatureContainer = styled.div`
  border: 1px solid teal;
  border-radius: 5px;
  padding: 30px;
  margin: 10px;
`;

export function Feature({ icon: Icon = IconArmchair, title, description }: FeatureProps) {
  const theme = useMantineTheme();
  return (
    <FeatureContainer>
      <ThemeIcon variant="light" size={40} radius={40}>
        <Icon size={20} stroke={1.5} />
      </ThemeIcon>
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
  data?: FeatureProps[];
}

const ToDoList = ({ data = MOCKDATA }: ToDoListProps) => {
  const { spacing } = useMantineTheme();
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
        />
      ))}
    </SimpleGrid>
  );
};

export default ToDoList;
