import React, { useState } from "react";
import Image from "next/image";
import Menu from "@/components/menu";
import Settings from "./settings";

export const TopBar = ({}) => {
  const [menu, setMenu] = useState(false);
  const [settings, setSettings] = useState(false);
  const [createProject, setCreateProject] = useState(false);

  return (
    <>
      {menu ? <Menu setMenu={setMenu} /> : null}
      {settings ? <Settings setSettings={setSettings} /> : null}
      {settings ? <Settings setSettings={setCreateProject} /> : null}

      <div className="menu-bar flex justify-between  p-5 bg-strongContrast">
        <Image
          src="/menu.svg"
          width={30}
          height={30}
          alt="hamburger icon"
          onClick={() => {
            setMenu((prev) => !prev);
          }}
        />
        <div className="project-name text-2xl"> PINTEREST CLONE </div>
        <Image
          src="/settings.svg"
          width={40}
          height={30}
          alt="arrow icon"
          onClick={() => {
            setSettings((prev) => !prev);
          }}
        />
      </div>
    </>
  );
};
