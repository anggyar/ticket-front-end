// pages/_app.js

import "@/styles/styles.css";
import { cn } from "@/utils/cn";
import { HeroUIProvider } from "@heroui/react";
import { Inter } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

function MyApp({ Component, pageProps }) {
  return (
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
  );
}

export default MyApp;
