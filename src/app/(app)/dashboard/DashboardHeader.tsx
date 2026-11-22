import { LayoutGrid, Plus, Search, Star } from "lucide-react";
import Image from "next/image";
import profileImg from "@/svg/aian girl image.png";

const DashboardHeader = ({ name }: { name: string }) => {
  return (
    <div className=" bg-white pt-6 px-6 pb-2 border flex w-full justify-between">
      <div className="flex justify-center items-center gap-2">
        <div className="icon p-2 bg-blue-900/25 rounded-md">
          <LayoutGrid color="#5b4df0" size={18} />
        </div>
        <div className="greet text-2xl font-bold">Good morning, <span className="font-normal">{name}</span></div>
        <div className="icon text-gray-500 font-bold">
          <Star size={16} />
        </div>
      </div>

      <div className="flex justify-center items-center gap-1">
        <div className="searchbar  border-2  flex p-2 items-center rounded-[17] box-border border-black/10 w-fit">
          <div className="text-black/20 ">
            <Search className="box-border " />
          </div>
          <input
            className="px-2 outline-none text-black/60 w-44"
            placeholder="Search Tasks..."
          />
          <div className="px-1 rounded-md bg-black/3 border-black/20 text-black/65 box-border text-sm">
            ctrl K
          </div>
        </div>
        <div
          className="add-task bg-linear-to-br from-[#ff7e4f] to-[#ffb03a]
                 flex items-center justify-center shadow-md
                 transition hover:scale-105 active:scale-95 text-white p-1 rounded-md"
        >
          <Plus />
        </div>
        <div className="profile relative h-8 w-8 overflow-hidden rounded-full">
          <Image
            src={profileImg}
            fill
            sizes="32px"
            alt="profile-image"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
