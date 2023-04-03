import Image from "next/image";
import { useState } from "react";

export default function Task({ children, index }) {
  const [active, setActive] = useState({ isActive: false, index: -1 });
  console.log(active);
  return (
    <div className="">
      <div
        className=" p-8 bg-highlights flex rounded-xl my-5 h-full relative w-full cursor-pointer"
        onClick={() => setActive({ isActive: !active.isActive, index })}>
        {children}
        <div
          className={` absolute settings flex gap-3 items-center justify-center bg-strongContrast h-full translate-x-2/4 -translate-y-2/4 top-1/2 left-1/3 p-3 ${
            active.isActive && active.index === index ? "visible" : "hidden"
          } `}>
          <Image src="/trash.svg" width={30} height={30} alt="arrow icon"  />
          <Image src="/edit.svg" width={30} height={30} alt="arrow icon" />
          <Image src="/arrow-right.svg" width={30} height={30} alt="arrow icon" />
        </div>
      </div>
    </div>
  );
}
