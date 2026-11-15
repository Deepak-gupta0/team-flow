import Sidebar from "@/components/Sidebar";

const layout = ({children} : {children: React.ReactNode}) => {
  return (
    <div className="bg-[#F4F5FA] flex gap-3">
      <Sidebar />
      {children}
    </div>
  )
}

export default layout;