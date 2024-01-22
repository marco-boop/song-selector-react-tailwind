import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-20 bg-antiflashwhite text-dyeindigo">
      <div className="z-10 max-w-5xl w-full items-center justify-between text-sm lg:flex">
      <h1 className="text-6xl font-bold">
      SOTM
    </h1>
    <p className="p-10 font-serif overflow-auto" >This is a pragraph welcome to song of the month archive</p>
      </div>
    </main>
  );
}
