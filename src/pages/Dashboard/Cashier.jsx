import SideBar from "../../component/SideBar";
import { MdOutlineSearch } from "react-icons/md";

const DashboardCashier = () => {
  const users = ["John doe", "Mary Jane", "Doe John", "Jane Mary"];

  return (
    <>
      <div className="min-h-screen w-full flex  bg-white pr-8">
        <div className="w-2/12">
          <SideBar role="admin" />
        </div>
        <div className="w-full flex flex-col gap-10 py-8 pl-5">
          <div className=""></div>
          <div className="bg-grey flex flex-row justify-between items-center gap-2 rounded-xl w-5/12 px-2 py-1">
            <MdOutlineSearch size={32} color="#B6231D" />
            <input
              className="bg-grey w-full focus:outline-none text-xl"
              type="text"
              placeholder="Search User"
            ></input>
          </div>
          <div className="flex flex-col gap-5 w-8/12">
            <div className="px-4 py-2 flex flex-row w-full border-blue border rounded-xl justify-between items-center">
              <div className="flex flex-col gap-3">
                <span className="text-2xl font-bold">Udin</span>
                <span className="text-lg">position</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardCashier;
