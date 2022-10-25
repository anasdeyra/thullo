import {
  Paper,
  Image,
  Text,
  Group,
  Badge,
  Title,
  ActionIcon,
  Avatar,
  Indicator,
} from "@mantine/core";
import { MdAdd, MdAttachFile, MdComment } from "react-icons/md";

export default function Card() {
  return (
    <Paper
      sx={{ boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.05)" }}
      radius={12}
      p={12}
    >
      <Image
        src={
          "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80"
        }
        height={130}
        width={220}
        radius={12}
      />
      <Title order={2} size={16} weight={400} mt={12}>
        Github jobs challenge
      </Title>
      <Group mt={20}>
        <Badge
          sx={{ textTransform: "none", fontFamily: "'Noto Sans', sans-serif" }}
          variant="light"
          color={"green"}
        >
          Tech
        </Badge>
      </Group>
      <Group mt={24} position="apart">
        <Group spacing={8}>
          <Avatar size={28} />
          <Avatar size={28}>+3</Avatar>

          <ActionIcon size={28} color={"blue"} variant="filled">
            <MdAdd size={24} />
          </ActionIcon>
        </Group>
        <Group spacing={8}>
          <ActionIcon variant="transparent">
            <MdComment />
            <Text
              ml={4}
              size={10}
              weight={500}
              color="gray"
              sx={{
                fontFamily: "'Noto Sans', sans-serif",
              }}
            >
              2
            </Text>
          </ActionIcon>

          <ActionIcon variant="transparent">
            <MdAttachFile />
            <Text
              ml={4}
              size={10}
              weight={500}
              color="gray"
              sx={{
                fontFamily: "'Noto Sans', sans-serif",
              }}
            >
              1
            </Text>
          </ActionIcon>
        </Group>
      </Group>
    </Paper>
  );
}
