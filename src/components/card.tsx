import Image from "next/image";
import { useState } from "react";
import Task from "./task";

export default function Page({ children, tasks, index }) {
  const [collapsed, setCollapsed] = useState({ active: true, index: -1 });

  return (
    <div className="w-full">
      <div className="card-info w-full bg-strongContrast p-5 text-3xl flex items-center justify-between">
        {children}
        <div className="flex flex-col text-sm items-center">
          {tasks.length} Tasks
          <Image
            src="/arrow.svg"
            width={30}
            height={30}
            onClick={() => {
              setCollapsed({ active: !collapsed.active, index });
            }}
            alt="arrow icon"
          />
        </div>
      </div>
      {collapsed.active && collapsed.index === index ? (
        <div className="card-contents bg-lightContrast flex-col p-5 ">
          {tasks.map((task, i) => (
            <Task index={i} key={i}>
              {task}
            </Task>
          ))}
        </div>
      ) : null}
    </div>
  );
}
