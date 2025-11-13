import Header from "./components/header";
import Hero from "./components/hero";

export default function Page() {
  return (
    <div className=" max-w-4xl border-x-[1.5px] mx-auto pt-[60px] min-h-screen border-neutral-300 ">
      <Header />
      <Hero />
    </div>
  );
}
