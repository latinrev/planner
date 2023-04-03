import { Input } from "../../components/Input";
import Image from "next/image";

export default function Login() {
  return (
    <div className="flex flex-col  bg-strongContrast justify-center items-center p-10 h-full w-full ">
      <div className="flex flex-col text-center mb-10">
        <h1 className="text-5xl mb-10">ORGNZD</h1>
        <h3 className="text-4xl ">Register</h3>
      </div>
      <div className="text-sm w-full">
        <Input src="/user.svg" placeholder="Type your username" label="Username" />
        <Input src="/lock.svg" placeholder="Type your password" label="Password" type="password" />
        <Input src="/lock.svg" placeholder="Retype your password" label="Confirm Password" type="password" />
      </div>
      <button className=" w-full text-center bg-highlights p-3 rounded-xl mt-3">REGISTER</button>
      <div className="my-5 flex flex-col">
        <span className="text-sm">Already have an account?</span>
        <button className="text-highlights text-lg">LOGIN HERE</button>
      </div>
    </div>
  );
}
