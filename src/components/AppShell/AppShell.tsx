import { AppShell as A } from "@mantine/core";
import Header from "./Header";

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <A padding={24} header={<Header />}>
      {children}
    </A>
  );
}
