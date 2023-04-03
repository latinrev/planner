import React from "react";
import Image from "next/image";

export const Input = ({ label, src, placeholder, actionText, action, type, register, name }) => {
  return (
    <div className="input  w-full py-2">
      <label htmlFor="">{label}</label>
      <div className="flex flex-col w-full">
        <div className="flex border-b border-b-highlights px-3 w-full ">
          <Image src={src} width={20} height={20}></Image>
          <input
            type={type}
            placeholder={placeholder}
            className="bg-transparent p-2 text-text placeholder-text focus:outline-none text-[12px] w-full"
            {...register(name)}
          />
        </div>
        <span className="text-[12px] my-1 text-right" onClick={() => action()}>
          {actionText}
        </span>
      </div>
    </div>
  );
};
