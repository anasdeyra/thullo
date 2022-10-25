// src/pages/_app.tsx
import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import type { Session } from "next-auth";
import type { AppType } from "next/app";
import { trpc } from "../utils/trpc";
import { MantineProvider, Global } from "@mantine/core";
import Head from "next/head";
import AppShell from "../components/AppShell/AppShell";
import theme from "../utils/theme";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <>
      <Head>
        <title>Thrello</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/Logo-small.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <SessionProvider session={session}>
        <Global
          styles={[
            // @ts-ignore: totaly fine
            `@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap');`,
            // @ts-ignore: totaly fine
            `@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap');`,
          ]}
        />
        <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
          <AppShell>
            <Component {...pageProps} />
          </AppShell>
        </MantineProvider>
      </SessionProvider>
    </>
  );
};

export default trpc.withTRPC(MyApp);
