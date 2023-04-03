import appContext from "@/context/appContext";
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import { useContext, useEffect, useState } from "react";

export default function Menu({ setMenu }) {
  const { projects } = useContext(appContext);
  return (
    <>
      <div className="absolute bg-strongContrast w-6/12 h-full flex flex-col z-10 ">
        <h1 className="text-2xl text-center">ORGNZD</h1>
        <div className="projects my-24 flex flex-col">
          {projects?.map((project) => {
            return <span className="p-5 bg-highlights">{project.name}</span>;
          })}
        </div>
        <span className="p-5" onClick={()=>{}}>New Project</span>
      </div>
      <div
        className="absolute h-full w-full backdrop-blur-sm "
        onClick={() => {
          setMenu(false);
        }}></div>
    </>
  );
}
