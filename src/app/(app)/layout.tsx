import Sidebar from "@/components/Sidebar";
import DashboardHeader from "./dashboard/DashboardHeader";

const Layout = ({ children }: { children: React.ReactNode }) => {
  //fetching user data
  const name = "Mastan";

  return (
    <div className="bg-[#eeeeef] flex gap-3 py-3 min-h-screen h-screen">
      <div className="w-fit">
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col h-full overflow-y-auto overflow-x-hidden wrap-break-word rounded-[28px]">
        <DashboardHeader name={"Mastan"}/>
        <div className="flex-1 px-6 bg-[#f4f4f8] py-2">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
