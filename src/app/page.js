import Banner from "@/components/Banner";
import Friends from "@/components/Friends";
import SummaryCard from "@/components/SummaryCard";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Banner />
      <div className="grid grid-cols-1 min-[418px]:grid-cols-2 min-[746px]:grid-cols-4 gap-8 ml-20 mr-20 mt-10">
        <SummaryCard num="10" text="Total Friends" />
        <SummaryCard num="3" text="On track" />
        <SummaryCard num="6" text="Need attention" />
        <SummaryCard num="12" text="interactions This Month" />
        
      </div>
      <p className="text-xl font-bold mt-10 ml-20">Your Friends</p>
      <Friends/>
    </div>
  );
}
