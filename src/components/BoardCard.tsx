import { Avatar, Group, Image, Paper, Stack, Text } from "@mantine/core";
import { NextLink } from "@mantine/next";
import { AppRouterTypes } from "../utils/trpc";

export default function BoardCard({
  coverPhoto,
  id,
  title,
  members,
}: AppRouterTypes["board"]["getMyBoards"]["output"][number]) {
  return (
    <NextLink href={`/board/${id}`}>
      <Paper radius={12} p={12}>
        <Stack spacing={0}>
          <Image radius={12} src={coverPhoto} height={130} />
          <Text mt={12} mb={22} sx={{ fontFamily: "'Noto Sans',sans-serif" }}>
            {title}
          </Text>
          {members.length > 0 ? (
            <Group>
              <Avatar src={members[0]?.memeber.image} />
            </Group>
          ) : (
            <Text size={"xs"} sx={{ color: "#bdbdbd" }}>
              no members yet
            </Text>
          )}
        </Stack>
      </Paper>
    </NextLink>
  );
}
