const Admin = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-grey">
      <div className="flex-col flex w-4/12  rounded-xl bg-white ">
        <div className="flex-row flex items-center justify-between px-4 py-4 bg-red w-full rounded-t-xl text-white">
          <h1 className="font-black text-[32px]">Reserveat</h1>
          <h1 className="font-black text-2xl">Admin</h1>
        </div>
        <div className="rounded-b-xl flex-col flex py-4 px-6 gap-3">
          <div className="flex flex-col">
            <span className="text-2xl ml-2">Email</span>
            <input
              type="text"
              placeholder="input your email"
              className="p-2 bg-grey rounded-xl text-2xl focus:outline-none"
            ></input>
          </div>

          <div className="flex flex-col">
            <span className="text-2xl ml-2">Password</span>
            <input
              type="text"
              placeholder="input your password"
              className="p-2 bg-grey rounded-xl text-2xl focus:outline-none"
            ></input>
          </div>
        </div>
        <div className="mt-8 flex flex-row py-4 px-6 justify-between items-end">
          <button className="bg-red rounded-xl text-white uppercase px-2 py-1 font-bold text-2xl">
            LOGIN
          </button>
          <span className=" text-xs text-red underline">forgot password?</span>
        </div>
      </div>
    </div>
  );
};

export default Admin;
