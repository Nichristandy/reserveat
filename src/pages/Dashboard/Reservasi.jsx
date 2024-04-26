import SideBar from "../../component/SideBar";

const Reservasi = () => {
  return (
    <>
      {" "}
      <div className="min-h-screen w-full flex  bg-white pr-8">
        <div className="w-2/12">
          <SideBar />
        </div>
        <div className="w-full grid grid-cols-10 gap-8 py-8 pl-5">
          <div className="col-span-5">
            <div className="flex flex-row gap-5 items-center">
              <span className="text-2xl font-bold">hour:</span>{" "}
              <button className="bg-grey rounded-xl text-black uppercase px-2 py-1 font-bold text-2xl">
                17:00
              </button>
            </div>
            <div className=" mt-14 flex flex-row gap-8">
              <button className="bg-grey rounded-xl text-black  px-2 py-1 font-bold text-2xl">
                Indoor
              </button>
              <button className="bg-grey rounded-xl text-black  px-2 py-1 text-2xl">
                Outdoor
              </button>
            </div>
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
          <div className="col-span-5">
            <div className="rounded-xl min-h-[522px] border border-blue py-8 px-6">
              <div className="flex flex-row pb-3 border-b border-b-blue justify-between">
                <div className="flex flex-col gap-1">
                  <span className="text-2xl font-bold">Reservant</span>
                  <span className="text-2xl">John doe</span>
                </div>
                <div className="flex flex-col gap-1 text-end">
                  <span className="text-2xl font-bold">Phone Number:</span>
                  <span className="text-2xl">+6212345678</span>
                </div>
              </div>
              <div className="mt-6">
                <div className="font-bold text-2xl flex flex-col gap-1">
                  Menu Order:
                  <span>-</span>
                </div>
              </div>

              {/* button */}
              <div className="w-full flex flex-row justify-between mt-56">
                <button className="bg-red rounded-xl text-white uppercase px-2 py-1 font-bold text-2xl">
                  Reschedule
                </button>
                <button className="bg-blue rounded-xl text-white uppercase px-2 py-1 font-bold text-2xl">
                  Arrived
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reservasi;
