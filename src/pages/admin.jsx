import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Admin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email == "admin@gmail.com" && password == "admin123") {
      alert("logged in");
      navigate("/admin/dashboard-home");
    } else {
      alert("wrong password or email");
    }
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-grey">
      <div className="flex-col flex w-4/12  rounded-xl bg-white ">
        <div className="flex-row flex items-center justify-between px-4 py-4 bg-red w-full rounded-t-xl text-white">
          <div className="flex flex-row gap-2">
            <img src=".././Logo.svg"></img>
            <h1 className="font-black text-[32px]">Reserveat</h1>
          </div>

          <h1 className="font-black text-2xl">Admin</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="rounded-b-xl flex-col flex py-4 px-6 gap-3">
            <div className="flex flex-col">
              <span className="text-2xl ml-2">Email</span>
              <input
                type="text"
                placeholder="input your email"
                className="p-2 bg-grey rounded-xl text-2xl focus:outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>

            <div className="flex flex-col">
              <span className="text-2xl ml-2">Password</span>
              <input
                type="password"
                placeholder="input your password"
                className="p-2 bg-grey rounded-xl text-2xl focus:outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>
          </div>
          <div className="mt-8 flex flex-row py-4 px-6 justify-between items-end">
            <button
              type="submit"
              className="bg-red rounded-xl text-white uppercase px-2 py-1 font-bold text-2xl"
            >
              LOGIN
            </button>
            <button className=" text-xs text-red underline">
              forgot password?
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Admin;
