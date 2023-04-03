import { useForm } from "react-hook-form";

export default function Settings({setSettings}) {
  const { register, handleSubmit } = useForm();
  return (
    <div className="flex h-screen w-screen justify-center items-center absolute ">
      <div
        className="flex h-screen w-screen justify-center items-center absolute backdrop-blur-sm"
        onClick={() => setSettings(false)}></div>
      <div className="flex flex-col p-5  w-[80%]  bg-strongContrast gap-3 rounded-xl z-10">
        <label htmlFor="projectName">Project Name</label>
        <input
          type="text"
          {...register("projectName")}
          name="projectName"
          placeholder=""
          className="bg-highlights placeholder-text p-2 rounded-lg"
        />
        <label htmlFor="projectDescription">Project Description</label>
        <textarea
          {...register("projectDescription")}
          name="projectDescription "
          className="bg-highlights placeholder-text p-5 rounded-lg"
        />
        <label htmlFor="projectMembers">Project Team Members</label>
        <input
          type="text"
          {...register("projectMembers")}
          name="projectMembers"
          className="bg-highlights placeholder-text p-2 rounded-lg"
        />
        <label htmlFor="projectDeadline">Project Deadline</label>
        <input
          type="text"
          {...register("projectDeadline")}
          name="projectDeadline"
          className="bg-highlights placeholder-text p-2 rounded-lg"
        />
        <input type="submit" value="SAVE" className="p-2 px-10 bg-highlights rounded-2xl self-center items" />
      </div>
    </div>
  );
}
