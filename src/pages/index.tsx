import { TopBar } from "../components/topBar";
import Image from "next/image";

import Card from "@/components/card";
import Head from "next/head";
import Menu from "@/components/menu";
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import CreateProject from "@/components/createProject";
import { useContext, useEffect } from "react";
import appContext from "@/context/appContext";

const mockCards = {
  "To Do": ["User registration", "Admin registration", "something registration"],
  "Work In Progress ": ["User registration", "Admin registration", "something registration"],
};
export default function Home({ projects }) {
  const { setProjects } = useContext(appContext);
  useEffect(() => {
    setProjects(projects);
  });
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/*       <CreateProject></CreateProject>
       */}{" "}
      <div className="h-screen text-text bg-lightContrast relative">
        <TopBar projects={projects} />
        <div className="content-section flex flex-col h-full bg-lightContrast">
          {Object.keys(mockCards).map((card, i) => (
            <Card key={i} tasks={mockCards[card]} index={i}>
              {card}
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
export const getServerSideProps = async (ctx) => {
  // Create authenticated Supabase Client
  const supabase = createServerSupabaseClient(ctx);
  // Check if we have a session
  const {
    data: { session },
  } = await supabase.auth.getSession();
  if (!session)
    return {
      redirect: {
        destination: "/logintest",
        permanent: false,
      },
    };

  const projects = (await supabase.from("projects").select("name").eq("owner_id", session.user.id)).data;
  return {
    props: {
      initialSession: session,
      user: session.user,
      projects,
    },
  };
};
