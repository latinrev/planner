import { useForm } from "react-hook-form";
import { Input } from "./Input";
import { Button } from "./button";
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";

export default function CreateProject() {
  const { register, handleSubmit } = useForm();
  const user = useUser();
  const supabaseClient = useSupabaseClient();
  function onSubmit({ projectName }) {
    supabaseClient.from("projects").insert({ name: projectName, owner_id: user?.id });
  }
  return (
    <div className="h-full absolute w-full p-5 flex  z-10 justify-center items-center">
      <div className="flex flex-col bg-strongContrast z-20 p-10 rounded rounded-lg">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input label="Project Name" register={register} name="projectName" src="/box.svg"></Input>
          <Button>Create</Button>
        </form>
      </div>
      <div className="absolute h-full w-full backdrop-blur-sm "></div>
    </div>
  );
}
