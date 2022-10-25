import { Header as H, TextInput, ActionIcon } from "@mantine/core";
import { NextLink } from "@mantine/next";
import { Image, Group, Divider, Text, Button, Avatar } from "@mantine/core";
import { MdApps } from "react-icons/md";
import { useRouter } from "next/router";
import { MdArrowDropDown as DownIcon } from "react-icons/md";

export default function Header() {
  const { pathname } = useRouter();
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
          {pathname.startsWith("/board/") && (
            <Group spacing={24}>
              <Text size={18} weight={500}>
                Board name
              </Text>{" "}
              <Divider orientation="vertical" />{" "}
              <Button
                size="xs"
                radius={8}
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
                borderRadius: 8,
              },
            }}
            rightSection={
              <Button radius={"md"} size="xs">
                Search
              </Button>
            }
          />
          <Group>
            <Avatar size={32} radius={8} />
            <Text
              sx={{ fontFamily: "'Noto Sans', sans-serif" }}
              size={12}
              weight={700}
            >
              Anas Deyra
            </Text>
            <ActionIcon variant="transparent">
              <DownIcon color={"#333"} />
            </ActionIcon>
          </Group>
        </Group>
      </Group>
    </H>
  );
}
