import { Container, Group, Text, Button, SimpleGrid } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { MdAdd } from "react-icons/md";
import BoardCard from "../components/BoardCard";
import CreateBoardModal from "../components/CreateBoardModal";
import { trpc } from "../utils/trpc";

export default function index() {
  const myBoards = trpc.board.getMyBoards.useQuery();
  // console.log(myBoards);
  const [opened, { close, open }] = useDisclosure(false);
  return (
    <Container mt={"xl"} size={"lg"}>
      {opened && <CreateBoardModal opened={opened} onClose={close} />}
      <Group position="apart">
        <Text>All Boards</Text>
        <Button
          radius={"sm"}
          onClick={() => {
            open();
          }}
          leftIcon={<MdAdd size={20} />}
          size="xs"
        >
          Add
        </Button>
      </Group>
      <SimpleGrid
        cols={4}
        breakpoints={[
          { maxWidth: "xl", cols: 4, spacing: "md" },
          { maxWidth: "md", cols: 3, spacing: "md" },
          { maxWidth: "sm", cols: 2, spacing: "sm" },
          { maxWidth: "xs", cols: 1, spacing: "sm" },
        ]}
        mt={40}
      >
        {myBoards.data?.map((props) => (
          <BoardCard key={props.id} {...props} />
        ))}
      </SimpleGrid>
    </Container>
  );
}
