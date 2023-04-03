import { Button } from '../../components/button'
import { useForm } from "react-hook-form";
import { Input } from "../../components/Input";
import Image from "next/image";
z
export default function Login() {
  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    console.log(data);
  }
  return (
    <div className="flex flex-col  bg-strongContrast justify-center items-center p-10 h-full w-full ">
      <div className="flex flex-col text-center mb-10">
        <h1 className="text-5xl mb-10">ORGNZD</h1>
        <h3 className="text-4xl ">Login</h3>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <div className="text-sm w-full">
          <Input src="/user.svg" placeholder="Type your username" label="Username" register={register} name="username" />
          <Input
            src="/lock.svg"
            placeholder="Type your password"
            label="Password"
            actionText="Forgot Password?"
            type="password"
            register={register}
            name="password"
          />
        </div>
<Button undefined/>      </form>
      <div className="my-5 flex flex-col">
        <span className="text-sm">Don't have an account?</span>
        <button className="text-highlights text-lg">REGISTER HERE</button>
      </div>
    </div>
  );
}
