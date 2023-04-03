import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Alata } from "next/font/google";
const alata = Alata({ weight: "400", subsets: ["latin"], variable: "--font-alata" });
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider, Session } from "@supabase/auth-helpers-react";
import { useState } from "react";
import AppContext from "@/context/appContext";

export default function App({
  Component,
  pageProps,
}: AppProps<{
  initialSession: Session;
}>) {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient());
  const [projects, setProjects] = useState();
  return (
    <SessionContextProvider supabaseClient={supabaseClient} initialSession={pageProps.initialSession}>
      <AppContext.Provider value={{ projects, setProjects }}>
        <main className={`${alata.className} h-screen`}>
          <Component {...pageProps} />
        </main>
      </AppContext.Provider>
    </SessionContextProvider>
  );
}
