import {
  Button,
  Group,
  Avatar,
  ActionIcon,
  Stack,
  Drawer,
  Text,
  Divider,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useRouter } from "next/router";
import { MdLock, MdMoreHoriz as MdDots, MdAdd } from "react-icons/md";
import Card from "../../components/Card/Card";
import { trpc } from "../../utils/trpc";
import { useEffect, useContext } from "react";
import { boardContext } from "../../utils/boardConext";

export default function board() {
  const { query } = useRouter();
  const [opened, { close, open }] = useDisclosure(false);
  const boardQuery = trpc.board.getBoard.useQuery({ id: query.id });
  const { boardName, setBoardName } = useContext(boardContext);
  useEffect(() => {
    boardQuery.data?.title && setBoardName(boardQuery.data.title);

    return () => {
      setBoardName(null);
    };
  }, [boardQuery]);

  return (
    <Stack sx={{ minHeight: "100%" }}>
      {opened && (
        <Drawer
          padding={20}
          position="right"
          opened={opened}
          onClose={close}
          withOverlay={false}
          title={
            <Text size={12} weight={600}>
              board name
            </Text>
          }
        >
          <Divider orientation="horizontal" />
        </Drawer>
      )}
      <Group position="apart" my={24}>
        <Group align={"start"} spacing={16}>
          <Button
            size={"xs"}
            variant="light"
            color={"gray"}
            leftIcon={<MdLock />}
          >
            Private
          </Button>

          <Avatar size={30} />
          <Avatar size={30} />
          <Avatar size={30} />
          <Avatar size={30} />
          <Avatar size={30} />
          <Avatar size={30}>+3</Avatar>

          <ActionIcon size={30} color={"blue"} variant="filled">
            <MdAdd size={24} />
          </ActionIcon>
        </Group>
        <Button
          size={"xs"}
          variant="light"
          color={"gray"}
          leftIcon={<MdDots />}
          onClick={() => {
            open();
          }}
        >
          Show Menu
        </Button>
      </Group>
      <Group
        align={"start"}
        noWrap
        p={24}
        sx={{
          borderRadius: 20,
          backgroundColor: "#f8f9fd",
          flexGrow: 1,
        }}
      >
        <Card />
      </Group>
    </Stack>
  );
}
