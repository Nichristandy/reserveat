import LineChart from "../../component/Charts/LineChart";
import SideBar from "../../component/SideBar";
import UserBar from "../../component/UserBar";

const Dashboard = () => {
  const users = ["John doe", "Mary Jane", "Doe John", "Jane Mary"];

  return (
    <div className="min-h-screen w-full flex  bg-grey pr-8">
      <div className="w-2/12 h-full">
        <SideBar />
      </div>
      <div className="w-full h-screen overflow-y-scroll grid grid-cols-10 gap-5 py-8 pl-5">
        <div className="col-span-7 bg-white rounded-xl p-8 flex items-center justify-center">
          <LineChart />
        </div>
        <div className=" col-span-3 bg-white rounded-xl p-8">
          <div className="flex flex-col gap-5">
            {users.map((user) => (
              <UserBar key={user} user={user} />
            ))}
          </div>
        </div>
        <div className=" col-span-7 bg-white rounded-xl p-8 ">
          <div className="w-full grid grid-cols-5 gap-5 mt-10">
            <div className="col-span-2 bg-grey rounded-xl h-28 text-xl font-bold items-center justify-center flex">
              6
            </div>
            <div className="col-span-2 bg-grey rounded-xl text-xl font-bold items-center justify-center flex">
              6
            </div>
            <div className="col-span-1 bg-grey rounded-xl text-xl font-bold items-center justify-center flex">
              2
            </div>
            <div className="col-span-2 bg-grey rounded-xl h-28 text-xl font-bold items-center justify-center flex">
              6
            </div>
            <div className="col-span-1 bg-grey rounded-xl text-xl font-bold items-center justify-center flex">
              2
            </div>
            <div className="col-span-1 bg-grey rounded-xl text-xl font-bold items-center justify-center flex">
              2
            </div>
            <div className="col-span-1 bg-grey rounded-xl text-xl font-bold items-center justify-center flex">
              2
            </div>
            <div className="col-span-2 bg-grey rounded-xl h-28 text-xl font-bold items-center justify-center flex">
              6
            </div>
            <div className="col-span-2 bg-grey rounded-xl text-xl font-bold items-center justify-center flex">
              6
            </div>
            <div className="col-span-1 bg-grey rounded-xl text-xl font-bold items-center justify-center flex">
              2
            </div>
          </div>
        </div>
        <div className=" col-span-3 bg-white rounded-xl p-8">cashier</div>
      </div>
    </div>
  );
};

export default Dashboard;
