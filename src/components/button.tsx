import React from "react";
import { useForm } from "react-hook-form";
import { Input } from "./Input";

export const Button = ({ children }) => (
  <button className=" w-full text-center bg-highlights p-3 rounded-xl mt-3" type="submit">
    {children}
  </button>
);
