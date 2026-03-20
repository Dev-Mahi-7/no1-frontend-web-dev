import Sidebar from "@/my-components/Sidebar";
import { ReactNode } from "react";

const MyLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className=" max-w-340 mt-4 mx-auto h-[96vh] overflow-hidden flex ">
      <Sidebar />
      <div className="main bg-green-300 p-4 flex-1 h-full overflow-y-auto">
        {children}
      </div>
    </div>
  );
};

export default MyLayout;
