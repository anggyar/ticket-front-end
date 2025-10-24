// pages/_app.js

import "@/styles/styles.css";
import { cn } from "@/utils/cn";
import { HeroUIProvider } from "@heroui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";
import { AppProps } from "next/app";
import { Inter } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <QueryClientProvider client={queryClient}>
        <HeroUIProvider>
          <main
            className={cn(
              inter.className,
              "flex min-h-screen min-w-full flex-col items-center justify-center gap-4"
            )}
          >
            <Component {...pageProps} />
          </main>
        </HeroUIProvider>
      </QueryClientProvider>
    </SessionProvider>
  );
}

export default MyApp;
