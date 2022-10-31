import { AppShell as A } from "@mantine/core";
import { useRouter } from "next/router";
import Header from "./Header";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const { pathname } = useRouter();
  return (
    <A
      sx={{ backgroundColor: pathname === "/" ? "#f8f9fd" : undefined }}
      padding={24}
      header={<Header />}
    >
      {children}
    </A>
  );
}
