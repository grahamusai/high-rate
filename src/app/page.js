import Image from "next/image";
import Navbar from "./components/navbar";
import Boards from "./components/boards";

export default function Home() {
  return (
    <div className="px-24">
      <Navbar />
      <div className="mb-5">
        <h1 className="text-[64px]">Hi Graham</h1>
        <p className="text-2xl">Welcome to your dashboard</p>
      </div>
      <Boards />
    </div>
  );
}
