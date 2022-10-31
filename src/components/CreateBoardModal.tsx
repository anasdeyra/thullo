import { Modal, Button, Group, TextInput, Stack, Image } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { MdAdd, MdLock, MdPeopleAlt, MdPhoto } from "react-icons/md";
import { trpc } from "../utils/trpc";
import UnsplashImagePicker from "./UnsplashImagePicker";

export default function CreateBoardModal(props: Props) {
  const form = useForm({
    initialValues: { coverPhoto: "", title: "", isPrivate: true },
  });
  const BoardMutation = trpc.board.create.useMutation({
    onSuccess: () => {
      props.onClose();
    },
  });

  const handleSubmit = () => {
    BoardMutation.mutate(form.values);
  };

  const togglePrivacy = () => {
    form.values.isPrivate
      ? form.setFieldValue("isPrivate", false)
      : form.setFieldValue("isPrivate", true);
  };

  const selectPhoto = (url: string) => {
    form.setFieldValue("coverPhoto", url);
  };

  const [opened, { close, toggle }] = useDisclosure(false);

  return (
    <Modal size={"sm"} {...props}>
      <Stack spacing={22}>
        <Image
          height={150}
          radius={8}
          withPlaceholder
          src={form.values.coverPhoto}
        />
        <TextInput
          variant="default"
          placeholder="Add board title"
          styles={{
            root: { filter: "drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.1))" },
            input: { border: "none" },
          }}
          {...form.getInputProps("title")}
        />
        <Group position="center" grow>
          <UnsplashImagePicker
            close={close}
            opened={opened}
            selectPhoto={selectPhoto}
          >
            <Button
              onClick={() => {
                toggle();
              }}
              leftIcon={<MdPhoto />}
              variant="light"
              color={"gray"}
            >
              Cover
            </Button>
          </UnsplashImagePicker>
          <Button
            onClick={togglePrivacy}
            leftIcon={
              form.values.isPrivate === true ? <MdLock /> : <MdPeopleAlt />
            }
            variant="light"
            color={"gray"}
          >
            {form.values.isPrivate === true ? "Private" : "Public"}
          </Button>
        </Group>
        <Group position="right" align={"center"}>
          <Button onClick={props.onClose} color={"gray"} variant={"white"}>
            Cancel
          </Button>
          <Button
            loading={BoardMutation.isLoading}
            onClick={handleSubmit}
            leftIcon={<MdAdd size={18} />}
          >
            Create
          </Button>
        </Group>
      </Stack>
    </Modal>
  );
}

interface Props {
  onClose: () => void;
  opened: boolean;
}
