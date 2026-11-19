import Sidebar from "@/components/Sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-[#eeeeef] flex gap-3 py-3 min-h-screen h-screen">
      <div className="w-fit">
      <Sidebar />

      </div>
      <div className="flex-1 h-full overflow-y-auto overflow-x-hidden wrap-break-word rounded-[28px] bg-white p-2">{children}</div>
      
    </div>
  );
};

export default Layout;
