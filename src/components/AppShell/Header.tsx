import { Header as H, TextInput, ActionIcon } from "@mantine/core";
import { NextLink } from "@mantine/next";
import { Image, Group, Divider, Text, Button, Avatar } from "@mantine/core";
import { MdApps } from "react-icons/md";
import { useRouter } from "next/router";
import { MdArrowDropDown as DownIcon } from "react-icons/md";
import { trpc } from "../../utils/trpc";
import { signIn } from "next-auth/react";
import { boardContext } from "../../utils/boardConext";
import { useContext } from "react";

export default function Header() {
  const { pathname } = useRouter();
  const session = trpc.auth.getSession.useQuery();
  const { boardName, setBoardName } = useContext(boardContext);
  return (
    <H
      withBorder={false}
      sx={{ boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.05)" }}
      height={72}
    >
      <Group px={24} sx={{ height: "100%" }} position="apart" align={"center"}>
        <Group spacing={94}>
          <NextLink href={"/"}>
            <Image height={30} width={98} src={"/logo.svg"} />
          </NextLink>
          {pathname.startsWith("/board/") && boardName && (
            <Group spacing={24}>
              <Text size={18} weight={500}>
                {boardName}
              </Text>{" "}
              <Divider orientation="vertical" />{" "}
              <Button
                component={NextLink}
                href="/"
                size="xs"
                radius={4}
                leftIcon={<MdApps />}
                color="gray"
                variant="light"
              >
                All boards
              </Button>
            </Group>
          )}
        </Group>
        <Group spacing={44}>
          <TextInput
            rightSectionWidth={78}
            placeholder="keywords..."
            variant="default"
            styles={{
              input: { border: "none" },
              root: {
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                borderRadius: 4,
              },
            }}
            rightSection={
              <Button radius={4} size="xs">
                Search
              </Button>
            }
          />
          {session.data?.user ? (
            <Group>
              <Avatar src={session.data.user?.image} size={32} radius={4} />
              <Text
                sx={{ fontFamily: "'Noto Sans', sans-serif" }}
                size={12}
                weight={700}
              >
                {session.data.user?.name}
              </Text>
              <ActionIcon variant="transparent">
                <DownIcon size={16} color={"#333"} />
              </ActionIcon>
            </Group>
          ) : (
            <Button
              onClick={() => {
                signIn();
              }}
            >
              Sign in
            </Button>
          )}
        </Group>
      </Group>
    </H>
  );
}
