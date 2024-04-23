const Dashboard = () => {
  return (
    <div className="min-h-screen w-full flex  bg-grey pr-8">
      <div className="w-2/12 flex-col flex justify-between bg-red rounded-r-xl pl-8 min-h-screen text-white pb-20">
        <div className="flex flex-col gap-6 text-[24px]">
          <div className="font-black text-[32px] py-8">Reserveat</div>
          <span>Home</span>
          <span>Reservasi</span>
          <span>User</span>
        </div>
        <span className="text-xl">Log out</span>
      </div>
      <div className="w-full grid grid-cols-10 gap-5 py-8 pl-5">
        <div className=" col-span-7 bg-white rounded-xl">statistic</div>
        <div className=" col-span-3 bg-white rounded-xl">users</div>
        <div className=" col-span-7 bg-white rounded-xl">tampilan meja</div>
        <div className=" col-span-3 bg-white rounded-xl">cashier</div>
      </div>
    </div>
  );
};

export default Dashboard;
